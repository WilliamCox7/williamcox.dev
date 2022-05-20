import Styled from '@components/PreserveImage/PreserveImage.style'

interface Props {
  src: string;
  initWidth?: number;
  initHeight?: number;
  width: number;
  height: number;
  quality?: number;
}

const PreserveImage = ({ src, initWidth, initHeight, width, height, quality = 75 }: Props) => {
  return (
    <Styled.Section width={width} height={height}>
      <Styled.Img src={src} width={initWidth || width} height={initHeight || height} quality={quality} />
    </Styled.Section>
  )
}

export default PreserveImage