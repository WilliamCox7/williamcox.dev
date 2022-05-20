import styled from 'styled-components';
import Image from 'next/image'
import theme from '@theme'

interface SectionProps {
  width: number;
  height: number;
}

const Img = styled(Image)`
  box-shadow: ${theme.boxShadow.default};
`;

const Section = styled.section<SectionProps>`
  overflow-x: scroll;
  overflow-y: clip;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media(max-width: ${p => p.width}px) {
    min-width: 100%;
    max-width: 100%;
    max-height: ${p => p.height}px;
    min-height: ${p => p.height}px;
    display: flex;
    position: relative;
    ${Img}, span {
      max-width: ${p => p.width}px !important;
      min-width: ${p => p.width}px !important;
      max-height: ${p => p.height}px !important;
      min-height: ${p => p.height}px !important;
    }
  }
`;

const Styled = {
  Section,
  Img,
};

export default Styled