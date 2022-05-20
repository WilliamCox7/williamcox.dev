import styled from 'styled-components';
import Image from 'next/image'
import theme from '@theme'

const ImageContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 38px;
`;

const SmallImage = styled.img`
  -webkit-filter: blur(50px);
  filter: blur(50px);
  transform: scale(1);
  width: 200px;
`;

const BigImage = styled(Image)`
  transition: opacity 0.3s ease-in;
  object-fit: contain;
`

const Styled = {
  ImageContainer,
  SmallImage,
  BigImage,
};

export default Styled