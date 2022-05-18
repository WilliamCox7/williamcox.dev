import Styled from '@components/Hero/Hero.style'
import Bubbles from '@components/Bubbles/Bubbles'

interface Props {
  title: string;
  children: React.ReactNode;
  tech: string[];
  brand: 'brand' | 'hubsuite' | 'niteladder' | 'dmvp';
}

const Hero = ({ title, children, tech, brand }: Props) => {
  return (
    <Styled.Section>
      <Styled.Motherboard src="motherboard.jpeg" />
      <Styled.BubblesContainer>
        <Styled.LinksContainer>
          <Styled.Github>
            <Styled.Link target="_blank" href="https://github.com/WilliamCox7">
              <Styled.LinkImage src="github.svg" />
              <Styled.LinkText>WilliamCox7</Styled.LinkText>
            </Styled.Link>
          </Styled.Github>
          <Styled.Linkedin>
            <Styled.Link target="_blank" href="https://www.linkedin.com/in/william-cox/">
              <Styled.LinkImage src="linkedin.svg" />
              <Styled.LinkText>/in/william-cox</Styled.LinkText>
            </Styled.Link>
          </Styled.Linkedin>
        </Styled.LinksContainer>
        {children}
        <Bubbles tech={tech} brand={brand} />
        <Styled.Name brand={brand}>{title}</Styled.Name>
      </Styled.BubblesContainer>
    </Styled.Section>
  )
}

export default Hero