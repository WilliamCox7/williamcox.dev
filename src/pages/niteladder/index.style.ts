import styled from 'styled-components'
import theme from '@theme'

const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 140px;
`;

const IntroContainer = styled.div`
  background: ${theme.colors.grey[1000]};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 20px;
`;

const Intro = styled.h2`
  font-weight: 300;
  width: ${theme.screens.mx};
  color: ${theme.colors.grey[600]};
`;

interface SectionContainerProps {
  background?: string;
}

const SectionContainer = styled.div<SectionContainerProps>`
  background: ${p => p.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0px;
`;

const Screenshot = styled.img`
  box-shadow: ${theme.boxShadow.default};
`;

const Styled = {
  Page,
  LogoContainer,
  Logo,
  IntroContainer,
  Intro,
  SectionContainer,
  Screenshot,
}

export default Styled