import { useRef, useState, useEffect } from 'react'
import Styled from '@components/Hero/Hero.style'
import Bubbles from '@components/Bubbles/Bubbles'
import { useRouter } from 'next/router'

interface Props {
  title: string;
  children: React.ReactNode;
  tech: string[];
  brand: 'brand' | 'hubsuite' | 'niteladder' | 'dmvp';
}

const Hero = ({ title, children, tech, brand }: Props) => {

  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadRef = useRef<boolean>(true);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loadRef.current && imageRef?.current?.complete) {
      loadRef.current = false;
      handleLoad();
    }
  }, [imageRef?.current?.complete])

  const handleLoad = () => {
    setTimeout(() => setIsLoaded(true), 500);
  }

  return (
    <Styled.Section>
      <Styled.Motherboard ref={imageRef} style={{ opacity: isLoaded ? 0.25 : 0 }} src="motherboard.jpeg" />
      <Styled.BubblesContainer>
        {router.pathname !== '/' && <Styled.Back href="/">
          <Styled.BackSVG src="back.svg" />
          Back To Portfolio
        </Styled.Back>}
        {children}
        <Bubbles tech={tech} brand={brand} />
        <Styled.Name brand={brand}>{title}</Styled.Name>
      </Styled.BubblesContainer>
    </Styled.Section>
  )
}

export default Hero