import styled from "styled-components";
import Image from "next/image";
import theme from "@theme";

const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-shadow: ${theme.boxShadow.default};
  padding: 0px 20px;
`;

const Motherboard = styled(Image)`
  opacity: 0.25;
  transition: opacity 0.3s ease-in;
  object-fit: cover;
  @media (max-width: 780px) {
    height: 100%;
    width: auto;
  }
`;

const Back = styled.a`
  position: absolute;
  z-index: 2;
  top: 30px;
  left: 0;
  cursor: pointer;
  font-weight: 300;
  color: ${theme.colors.brand.default};
  font-size: 30px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    position: relative;
    top: 10px;
  }
`;

const BackSVG = styled.img`
  width: 30px;
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
  @media (max-width: 600px) {
    height: 500px;
    justify-content: space-around;
  }
`;

interface NameProps {
  brand: "brand" | "hubsuite" | "niteladder" | "dmvp" | "milliman";
}

const Name = styled.h1<NameProps>`
  font-weight: 300;
  color: ${(p) => theme.colors[p.brand].default};
  font-size: 60px;
  position: absolute;
  bottom: 20px;
  left: 0;
  white-space: pre;
  margin: 0;
  @media (max-width: 600px) {
    position: relative;
  }
`;

const Styled = {
  Section,
  Motherboard,
  Back,
  BackSVG,
  BubblesContainer,
  Name,
};

export default Styled;
