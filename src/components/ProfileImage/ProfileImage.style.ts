import styled from 'styled-components';
import theme from '@theme'

const Image = styled.img`
  width: 200px;
  position: absolute;
  top: 35px;
  left: 38px;
`;

const SmallImage = styled(Image)`
  -webkit-filter: blur(50px);
  filter: blur(50px);
  transform: scale(1);
`;

const BigImage = styled(Image)`
  transition: opacity 0.3s ease-in;
`;

const Styled = {
  SmallImage,
  BigImage,
};

export default Styled