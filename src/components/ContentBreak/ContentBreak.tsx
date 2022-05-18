import Styled from '@components/ContentBreak/ContentBreak.style'

interface Props {
  icon?: string;
  header: string;
  copy: string;
}

const ContentBreak = ({ icon, header, copy }: Props) => {
  return (
    <Styled.Section>
      <Styled.ContentHeaderContainer>
        {icon && <Styled.ContentHeaderImage src={icon} />}
        <Styled.ContentHeader>{header}</Styled.ContentHeader>
      </Styled.ContentHeaderContainer>
      <Styled.LinesContainer>
        <Styled.Line1 />
        <Styled.Line2 />
        <Styled.Copy>{copy}</Styled.Copy>
      </Styled.LinesContainer>
    </Styled.Section>
  )
}

export default ContentBreak