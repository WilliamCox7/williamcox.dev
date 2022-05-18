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

const Styled = {
  Section,
  Border,
  ImageContainer,
};

export default Styled