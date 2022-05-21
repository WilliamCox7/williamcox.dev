import { useState } from 'react'
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

  return (
    <Styled.Section>
      <Styled.Motherboard
        onLoadingComplete={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 0.25 : 0 }}
        src="/motherboard.jpeg"
        layout="fill"
      />
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