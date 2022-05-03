import styled from 'styled-components';
import theme from '@theme'

const Section = styled.section`
  background: ${theme.colors.grey[900]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

const Border = styled.div`
  width: 270px;
  height: 270px;
  padding: 10px;
  background: ${theme.colors.grey[100]};
  border-radius: 50%;
  box-shadow: ${theme.boxShadow.default};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  background: ${theme.colors.grey[300]};
  border-radius: 50%;
  box-shadow: ${theme.boxShadow.inset};
  overflow: hidden;
  position: relative;
  transition: visibility 0ms ease 400ms;
  z-index: 1;
`;

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
  Section,
  Border,
  ImageContainer,
  SmallImage,
  BigImage,
};

export default Styled