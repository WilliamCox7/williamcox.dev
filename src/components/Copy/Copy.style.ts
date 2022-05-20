import styled from 'styled-components';
import theme from '@theme'

interface SectionProps {
  wide?: boolean;
}

const Section = styled.section<SectionProps>`
  width: ${p => p.wide ? '100%' : '450px'};
  padding: 30px;
  display: flex;
  flex-direction: ${p => p.wide ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const Header = styled.h1`
  color: ${theme.colors.grey[50]};
  font-size: 34px;
  font-weight: 300;
  line-height: 44px;
  margin: auto;
  text-align: center;
  @media(max-width: 600px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Copy = styled.h3`
  color: ${theme.colors.grey[50]};
  font-weight: 300;
  font-size: 28px;
  line-height: 38px;
  max-width: 700px;
  @media(max-width: 600px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const CTA = styled.div`
  display: flex;
  padding: 30px 0px 0px;
`;

const Styled = {
  Section,
  Header,
  Copy,
  CTA,
};

export default Styled