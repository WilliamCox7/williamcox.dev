import styled from 'styled-components'
import theme from '@theme'

const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: ${theme.screens.mx};
  @media(max-width: 1350px) {
    width: 100%;
  }
`;

const ContentBreakContainer = styled.div`
  margin-top: 75px;
`;

const IntroContainer = styled.div`
  background: ${theme.colors.grey[1000]};
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding: 0px 20px;
`;

const Intro = styled.h2`
  font-weight: 300;
  width: ${theme.screens.mx};
  color: ${theme.colors.grey[600]};
`;

const WorkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  @media(max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SeeMore = styled.button`
  background: transparent;
  padding: 12px 20px;
  border-radius: 2px;
  font-size: 16px;
  border: solid 1px ${theme.colors.brand.default};
  color: ${theme.colors.brand.default};
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
  margin: 20px;
  margin-bottom: 50px;
  @media(max-width: 1100px) {
    width: calc(100% - 40px);
    max-width: 600px;
  }
  &:hover ${SeeMore} {
    background: ${theme.colors.brand.default};
    color: ${theme.colors.grey[1000]};
    opacity: 1;
  }
  &:hover {
    border: solid 1px ${theme.colors.brand.default};
  }
`;

const WorkBorder = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border: solid 1px ${theme.colors.brand.default};
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
  ContentContainer,
  ContentBreakContainer,
  IntroContainer,
  Intro,
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