import styled from "styled-components";
import theme from "@theme";

const Section = styled.section`
  width: 100vw;
  height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 0;
  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

const BubbleContainer = styled.div`
  display: flex;
`;

const TechBubble = styled.div`
  position: relative;
  background: ${theme.colors.grey[50]};
  box-shadow: ${theme.boxShadow.default};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin: 5px;
  z-index: 4;
`;

interface MedBubbleProps {
  brand: "brand" | "hubsuite" | "niteladder" | "dmvp" | "milliman";
}

const MedBubble = styled.div<MedBubbleProps>`
  position: relative;
  border: solid 1px ${(p) => theme.colors[p.brand].default};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin: 5px;
  z-index: 3;
`;

const SmlBubble = styled.div`
  position: relative;
  border: solid 1px ${theme.colors.grey[50]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  margin: 5px;
  z-index: 2;
`;

const SVG = styled.img`
  width: 50%;
`;

const Styled = {
  Section,
  BubbleContainer,
  TechBubble,
  MedBubble,
  SmlBubble,
  SVG,
};

export default Styled;
