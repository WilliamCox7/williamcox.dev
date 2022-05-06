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

const WorkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const SeeMore = styled.button`
  background: transparent;
  padding: 12px 20px;
  border-radius: 2px;
  font-size: 16px;
  border: solid 1px ${theme.colors.brand.orange};
  color: ${theme.colors.brand.orange};
  opacity: 0.25;
`;

const Work = styled.a`
  width: 300px;
  height: 600px;
  background: ${theme.colors.grey[1000]};
  box-shadow: ${theme.boxShadow.inset};
  border: solid 1px transparent;
  border-radius: 2px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:hover ${SeeMore} {
    background: ${theme.colors.brand.orange};
    color: ${theme.colors.grey[1000]};
    opacity: 1;
  }
  &:hover {
    border: solid 1px ${theme.colors.brand.orange};
  }
`;

const WorkBorder = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border: solid 1px ${theme.colors.brand.orange};
  opacity: 0.25;
  position: absolute;
`;

const WorkLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkLogo = styled.img`
  height: 100px;
`;

const WorkName = styled.h2`
  color: ${theme.colors.grey[50]};
  font-weight: 300;
`;

const WorkCopy = styled.p`
  width: 210px;
  color: ${theme.colors.grey[50]};
  line-height: 24px;
  text-align: center;
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
  WorkContainer,
  Work,
  WorkBorder,
  WorkLogoContainer,
  WorkLogo,
  WorkName,
  WorkCopy,
  SeeMore,
}

export default Styled