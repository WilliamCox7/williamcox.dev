import styled from 'styled-components';
import theme from '@theme'

const Section = styled.section`
  margin-bottom: 150px;
  @media(max-width: 1200px) {
    margin-bottom: 75px;
  }
  @media(max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContentHeaderImage = styled.img`
  width: 50px;
  margin-right: -5px;
  @media(max-width: 600px) {
    width: 36px;
  }
`;

const ContentHeader = styled.h1`
  font-weight: 300;
  color: ${theme.colors.brand.default};
  font-size: 40px;
  margin: 0;
  text-align: center;
  padding: 0px 20px;
  @media(max-width: 600px) {
    font-size: 28px;
  }
`;

const LinesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Line1 = styled.div`
  width: 150px;
  border-top: solid 1px ${theme.colors.brand.default};
  opacity: 0.5;
  text-align: center;
  margin-top: 15px;
`;

const Line2 = styled.div`
  width: 100px;
  border-top: solid 1px ${theme.colors.grey[600]};
  text-align: center;
  margin-top: 10px;
`;

const Copy = styled.p`
  color: ${theme.colors.grey[400]};
  margin-top: 30px;
`;

const Styled = {
  Section,
  ContentHeaderContainer,
  ContentHeaderImage,
  ContentHeader,
  LinesContainer,
  Line1,
  Line2,
  Copy,
};

export default Styled