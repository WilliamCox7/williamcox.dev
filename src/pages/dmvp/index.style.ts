import styled from "styled-components";
import Image from "next/image";
import theme from "@theme";

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
  background: ${(p) => p.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
`;

const Button = styled.a`
  background: transparent;
  padding: 12px 20px;
  border-radius: 2px;
  font-size: 18px;
  border: solid 1px ${theme.colors.dmvp.default};
  color: ${theme.colors.dmvp.default};
  cursor: pointer;
  &:hover {
    background: ${theme.colors.dmvp.default};
    color: ${theme.colors.grey[1000]};
  }
`;

interface ResponsiveImageProps {
  noShadow?: boolean;
}

const ResponsiveImage = styled(Image)<ResponsiveImageProps>`
  box-shadow: ${(p) => (p.noShadow ? "none" : theme.boxShadow.default)};
  max-width: 100%;
`;

const CopyContainer = styled.div`
  margin-bottom: 50px;
`;

const Styled = {
  Page,
  LogoContainer,
  Logo,
  IntroContainer,
  Intro,
  SectionContainer,
  Button,
  ResponsiveImage,
  CopyContainer,
};

export default Styled;
