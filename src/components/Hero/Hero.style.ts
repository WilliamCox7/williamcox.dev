import styled from 'styled-components';
import theme from '@theme'

const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-shadow: ${theme.boxShadow.default};
  padding: 0px 20px;
`;

const Motherboard = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.25;
  margin: auto;
  top: 0;
  bottom: 0;
  @media(max-width: 780px) {
    height: 100%;
    width: auto;
  }
`;

const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 2;
  top: 20px;
  left: 0;
  @media(max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Github = styled.div`
  cursor: pointer;
`;

const Linkedin = styled.div`
  cursor: pointer;
`;

const Link = styled.a`
  display: flex;
  color: ${theme.colors.grey[400]};
`;

const LinkText = styled.h2`
  font-weight: 300;
`;

const LinkImage = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const BubblesContainer = styled.div`
  width: ${theme.screens.mx};
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

interface NameProps {
  brand: 'brand' | 'hubsuite' | 'niteladder' | 'dmvp';
}

const Name = styled.h1<NameProps>`
  font-weight: 300;
  color: ${p => theme.colors[p.brand].default};
  font-size: 60px;
  position: absolute;
  bottom: 20px;
  left: 0;
  white-space: pre;
  margin: 0;
`;

const Styled = {
  Section,
  Motherboard,
  LinksContainer,
  Github,
  Linkedin,
  Link,
  LinkText,
  LinkImage,
  BubblesContainer,
  Name,
};

export default Styled