import styled from 'styled-components'
import theme from '@theme'

const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-shadow: ${theme.boxShadow.default};
`;

const Motherboard = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.25;
  margin: auto;
  top: 0;
  bottom: 0;
`;

const Github = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  cursor: pointer;
  z-index: 2;
`;

const Linkedin = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  cursor: pointer;
  z-index: 2;
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

const Name = styled.h1`
  font-weight: 300;
  color: ${theme.colors.brand.orange};
  font-size: 60px;
  position: absolute;
  bottom: 20px;
  left: 0;
  white-space: pre;
  margin: 0;
`;

const ContentContainer = styled.div`
  width: ${theme.screens.mx};
`;

const IntroContainer = styled.div`
  background: ${theme.colors.grey[1000]};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Intro = styled.h2`
  font-weight: 300;
  width: ${theme.screens.mx};
  color: ${theme.colors.grey[600]};
`;

const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const ContentHeaderImage = styled.img`
  width: 50px;
  margin-right: 15px;
`;

const ContentHeader = styled.h1`
  font-weight: 300;
  color: ${theme.colors.grey[50]};
  font-size: 40px;
`;

const LinesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Line1 = styled.div`
  width: 150px;
  border-top: solid 1px ${theme.colors.grey[600]};
  text-align: center;
  margin-top: -15px;
`;

const Line2 = styled.div`
  width: 100px;
  border-top: solid 1px ${theme.colors.grey[600]};
  text-align: center;
  margin-top: 10px;
`;

const PortfolioExplanation = styled.p`
  color: ${theme.colors.grey[400]};
  margin-top: 30px;
`;

const Styled = {
  Page,
  HeroContainer,
  Motherboard,
  Github,
  Linkedin,
  Link,
  LinkText,
  LinkImage,
  BubblesContainer,
  Name,
  ContentContainer,
  IntroContainer,
  Intro,
  ContentHeaderContainer,
  ContentHeaderImage,
  ContentHeader,
  LinesContainer,
  Line1,
  Line2,
  PortfolioExplanation,
}

export default Styled