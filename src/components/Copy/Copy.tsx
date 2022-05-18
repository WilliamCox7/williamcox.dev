import Styled from '@components/Copy/Copy.style'

interface Props {
  header?: string;
  copy?: string;
  cta?: React.ReactNode;
  wide? : boolean;
}

const Copy = ({ header, copy, cta, wide }: Props) => {
  return (
    <Styled.Section wide={wide}>
      {header && <Styled.Header>
        {header}
      </Styled.Header>}
      {copy && <Styled.Copy>
        {copy}
      </Styled.Copy>}
      {cta && <Styled.CTA>
        {cta}
      </Styled.CTA>}
    </Styled.Section>
  )
}

export default Copy