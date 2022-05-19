import Styled from '@components/Footer/Footer.style'

interface Props {
  nextObj: {
    tagline: string;
    slug: string;
  }
}

const Footer = ({ nextObj }: Props) => {
  return (
    <Styled.Section>
      <Styled.NextButton href={nextObj.slug}>
        What{"'"}s Next? Check out <Styled.Highlight>{nextObj.tagline}</Styled.Highlight>!
      </Styled.NextButton>
    </Styled.Section>
  )
}

export default Footer