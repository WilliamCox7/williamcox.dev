import { useState, useRef, useEffect, useCallback } from "react";
import Styled from "@components/Bubbles/Bubbles.style";
import theme from "@theme";

interface Position {
  x: number;
  y: number;
}

interface Props {
  tech: string[];
  brand: "brand" | "hubsuite" | "niteladder" | "dmvp" | "milliman";
}

const TECH_MAGNATISM = 15000;

const NUM_MED_BUBBLES = 25;
const MED_MAGNATISM = 8000;

const NUM_SML_BUBBLES = 60;
const SML_MAGNATISM = 8000;

const Bubbles = ({ tech, brand }: Props) => {
  const [magnetsOn, setMagnetsOn] = useState<boolean>(true);
  const [position, setPosition] = useState<"relative" | "absolute">("relative");

  const mouse = useRef<Position>({ x: 0, y: 0 });

  const techBubblePos = useRef<Position[]>(
    [...new Array(tech.length)].map((v) => ({ x: 0, y: 0 }))
  );
  const medBubblePos = useRef<Position[]>(
    [...new Array(NUM_MED_BUBBLES)].map((v) => ({ x: 0, y: 0 }))
  );
  const smlBubblePos = useRef<Position[]>(
    [...new Array(NUM_SML_BUBBLES)].map((v) => ({ x: 0, y: 0 }))
  );

  const techBubbleRef = useRef<HTMLDivElement>(null);
  const medBubbleRef = useRef<HTMLDivElement>(null);
  const smlBubbleRef = useRef<HTMLDivElement>(null);
  const thresholdRef = useRef<HTMLDivElement>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const handleAssignData = useCallback(() => {
    if (
      !techBubbleRef?.current?.children ||
      !medBubbleRef?.current?.children ||
      !smlBubbleRef?.current?.children
    ) {
      console.warn("handleAssignData:", {
        "!techBubbleRef?.current?.children": !techBubbleRef?.current?.children,
        "!medBubbleRef?.current?.children": !medBubbleRef?.current?.children,
        "!smlBubbleRef?.current?.children": !smlBubbleRef?.current?.children,
      });
      return;
    }
    const techChildren = Array.from(techBubbleRef.current.children);
    const medChildren = Array.from(medBubbleRef.current.children);
    const smlChildren = Array.from(smlBubbleRef.current.children);
    assignData(techChildren, techBubblePos);
    assignData(medChildren, medBubblePos);
    assignData(smlChildren, smlBubblePos);
    setPosition("absolute");
  }, []);

  const assignData = (
    children: Element[],
    bubblePos: React.MutableRefObject<Position[]>
  ) => {
    children.forEach((e, i) => {
      const { left, top } = e.getBoundingClientRect();
      bubblePos.current[i].x = left;
      bubblePos.current[i].y = top;
    });
  };

  const handleMagnatism = useCallback(() => {
    if (
      !techBubbleRef?.current?.children ||
      !medBubbleRef?.current?.children ||
      !smlBubbleRef?.current?.children
    ) {
      console.warn("handleMagnatism:", {
        "!techBubbleRef?.current?.children": !techBubbleRef?.current?.children,
        "!medBubbleRef?.current?.children": !medBubbleRef?.current?.children,
        "!smlBubbleRef?.current?.children": !smlBubbleRef?.current?.children,
      });
      return;
    }
    const techChildren = Array.from(techBubbleRef.current.children);
    const medChildren = Array.from(medBubbleRef.current.children);
    const smlChildren = Array.from(smlBubbleRef.current.children);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      magnatize(techChildren, TECH_MAGNATISM, techBubblePos);
      magnatize(medChildren, MED_MAGNATISM, medBubblePos);
      magnatize(smlChildren, SML_MAGNATISM, smlBubblePos);
    }, 15);
  }, []);

  const magnatize = (
    children: any,
    magnatism: number,
    bubblePos: React.MutableRefObject<Position[]>
  ) => {
    let forceX = 0,
      forceY = 0;
    children.forEach((e: any, i: number) => {
      const { left, top } = e.getBoundingClientRect();
      const distanceX = mouse.current.x - left;
      const distanceY = mouse.current.y - top;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const powerX = left - ((distanceX / distance) * magnatism) / distance;
      const powerY = top - ((distanceY / distance) * magnatism) / distance;
      forceX = (forceX + (bubblePos.current[i].x - left) / 2) / 2.1;
      forceY = (forceY + (bubblePos.current[i].y - top) / 2) / 2.1;
      e.style.left = `${powerX + forceX}px`;
      e.style.top = `${powerY + forceY}px`;
    });
  };

  const setMouseToCenter = useCallback(() => {
    if (!thresholdRef?.current) return;
    const { width, height, top } = thresholdRef.current.getBoundingClientRect();
    mouse.current = { x: width / 2, y: height / 2 + top };
  }, []);

  const turnOffInterval = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setMagnetsOn(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 15000);
  }, []);

  useEffect(() => {
    setMouseToCenter();
    handleAssignData();
    turnOffInterval();
    const mousemove = (e: MouseEvent) => {
      if (!thresholdRef?.current) return setMouseToCenter();
      const { top, bottom, right } =
        thresholdRef.current.getBoundingClientRect();
      if (
        e.pageY <= top + 10 ||
        e.pageY > bottom ||
        e.pageX <= 10 ||
        e.pageX >= right - 10
      )
        return setMouseToCenter();
      mouse.current = { x: e.pageX, y: e.pageY };
      turnOffInterval();
      setMagnetsOn(true);
    };
    const scroll = () => {
      if (window.scrollY > 0) {
        setMagnetsOn(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setMouseToCenter();
        setMagnetsOn(true);
      }
    };
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("scroll", scroll);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [turnOffInterval, setMouseToCenter, handleAssignData]);

  useEffect(() => {
    if (magnetsOn) handleMagnatism();
  }, [magnetsOn, handleMagnatism]);

  return (
    <Styled.Section ref={thresholdRef}>
      <Styled.BubbleContainer ref={techBubbleRef}>
        {[...new Array(tech.length)].map((v, i) => (
          <Styled.TechBubble key={i} style={{ position }}>
            <Styled.SVG src={tech[i]} />
          </Styled.TechBubble>
        ))}
      </Styled.BubbleContainer>
      <Styled.BubbleContainer ref={medBubbleRef}>
        {[...new Array(NUM_MED_BUBBLES)].map((v, i) => (
          <Styled.MedBubble key={i} style={{ position }} brand={brand} />
        ))}
      </Styled.BubbleContainer>
      <Styled.BubbleContainer ref={smlBubbleRef}>
        {[...new Array(NUM_SML_BUBBLES)].map((v, i) => (
          <Styled.SmlBubble key={i} style={{ position }} />
        ))}
      </Styled.BubbleContainer>
    </Styled.Section>
  );
};

export default Bubbles;
