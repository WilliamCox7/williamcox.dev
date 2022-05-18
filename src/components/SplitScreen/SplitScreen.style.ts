import styled from 'styled-components';
import theme from '@theme'

interface SectionProps {
  column?: boolean;
  wrap: string;
  noReverse?: boolean;
}

const Section = styled.section<SectionProps>`
  display: flex;
  align-items: center;
  flex-direction: ${p => p.column ? p.noReverse ? 'column' : 'column-reverse' : 'row'};
  width: ${theme.screens.mx};
  @media(max-width: 1330px) {
    width: 100%;
    padding: 0px 30px;
  }
  @media(max-width: ${p => p.wrap}) {
    flex-direction: ${p => p.noReverse ? 'column' : 'column-reverse'};
  }
  @media(max-width: 600px) {
    padding: 0px;
  }
`;

interface SideProps {
  size: string;
  wrap: string;
}

const Side = styled.div<SideProps>`
  width: ${p => p.size};
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: ${p => p.wrap}) {
    width: 100%;
  }
`;

const Styled = {
  Section,
  Side
};

export default Styled