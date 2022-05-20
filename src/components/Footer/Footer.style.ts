import styled from 'styled-components';
import theme from '@theme'

interface SectionProps {
  background: string;
}

const Section = styled.section<SectionProps>`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${theme.colors.brand.default};
  background: ${p => p.background};
`;

const NextButton = styled.a`
  color: ${theme.colors.grey[50]};
  font-size: 24px;
  padding: 30px;
  line-height: 36px;
  text-align: center;
`;

const Highlight = styled.span`
  color: ${theme.colors.brand.default};
`;

const LinksContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  padding: 30px;
  @media(max-width: 600px) {
    width: 100%;
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

const Styled = {
  Section,
  NextButton,
  Highlight,
  LinksContainer,
  Github,
  Linkedin,
  Link,
  LinkText,
  LinkImage,
};

export default Styled