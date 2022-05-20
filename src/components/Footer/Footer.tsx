import Styled from '@components/Footer/Footer.style'
import theme from '@theme'

interface Props {
  nextObj?: {
    tagline: string;
    slug: string;
  },
  background?: string;
}

const Footer = ({ nextObj, background = theme.colors.grey[1000] }: Props) => {
  return (
    <Styled.Section background={background}>
      {nextObj && <Styled.NextButton href={nextObj.slug}>
        What{"'"}s Next? Check out <Styled.Highlight>{nextObj.tagline}</Styled.Highlight>!
      </Styled.NextButton>}
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
    </Styled.Section>
  )
}

export default Footer