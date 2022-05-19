import styled from 'styled-components';
import theme from '@theme'

const Section = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${theme.colors.brand.default};
  background: radial-gradient(${theme.colors.grey[800]}, ${theme.colors.grey[1000]});
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

const Styled = {
  Section,
  NextButton,
  Highlight,
};

export default Styled