import Styled from '@components/HeroImage/HeroImage.style'

interface Props {
  children: React.ReactNode;
}

const HeroImage = ({ children }: Props) => {
  return (
    <Styled.Section>
      <Styled.Border>
        <Styled.ImageContainer>
          {children}
        </Styled.ImageContainer>
      </Styled.Border>
    </Styled.Section>
  )
}

export default HeroImage