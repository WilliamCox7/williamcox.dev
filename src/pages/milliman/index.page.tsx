import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@components/Hero/Hero";
import HeroImage from "@components/HeroImage/HeroImage";
import ContentBreak from "@components/ContentBreak/ContentBreak";
import PreserveImage from "@components/PreserveImage/PreserveImage";
import Copy from "@components/Copy/Copy";
import SplitScreen from "@components/SplitScreen/SplitScreen";
import Footer from "@components/Footer/Footer";
import Styled from "@pages/milliman/index.style";
import nextUp from "@data/next-up.json";
import theme from "@theme";

const TECH = [
  "react.svg",
  "electron.svg",
  "redux.svg",
  "jest.svg",
  "typescript.svg",
  "playwright.svg",
];

const NiteLadder: NextPage = () => {
  return (
    <>
      <Head>
        <title>William Cox | Milliman LTS</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Styled.Page>
        <Hero title="Milliman LTS" tech={TECH} brand="milliman">
          <HeroImage>
            <Styled.LogoContainer>
              <Styled.Logo src="milliman.svg" />
            </Styled.LogoContainer>
          </HeroImage>
        </Hero>

        <Styled.IntroContainer>
          <Styled.Intro>
            Electron.js application with React.js + Redux
          </Styled.Intro>
        </Styled.IntroContainer>

        <Styled.SectionContainer>
          <ContentBreak
            header="My Role"
            copy="What was I hired to do for Milliman?"
          />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Copy copy="Milliman moved their software to an Electron application and needed my help to clean it up. This meant centralizing a lot of their code, adopting a component library, upgrading the data management layer, and more." />
            }
            rightChild={
              <Styled.ResponsiveImage
                src="/milliman-screenshot.jpeg"
                width={720}
                height={405}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak
            header="Code Centralization and Decomposition"
            copy="Establish a pattern that will streamline development"
          />
          <SplitScreen
            wrap="2000px"
            column
            leftChild={
              <Copy
                wide
                copy="Components were written to be used very specifically. Because of this, reuse was very difficult even if it was possible. We took steps to root a lot of these components out and standardized their APIs."
              />
            }
            rightChild={
              <Styled.ResponsiveImage
                src="/milliman-decomposition.jpg"
                width={950}
                height={554}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak
            header="Incorporate Tried and True Software"
            copy="Reduce error-prone code by replacing it with 3rd party libraries"
          />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Styled.ResponsiveImage
                src="/milliman-ag-grid.jpeg"
                width={922}
                height={563}
              />
            }
            rightChild={
              <Copy copy="I had the pleasure of replacing their grid component with a 3rd party library called Ag Grid. This isolated a lot of re-renders and provided a better UX." />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak
            header="Unit, Integration, and E2E Testing"
            copy="Using Jest and Playwright to maintain code integrity"
          />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Copy copy="Another aspect of my work was ensuring our UI was covered with automated testing. We used Playwright and Jest to lock down many of the recurring issues we faced when deploying new features." />
            }
            rightChild={
              <Styled.ResponsiveImage
                src="/milliman-testing.jpg"
                width={800}
                height={408}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak
            header="Tech Migrations"
            copy="Making architectural decisions that will last"
          />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage
                src="/milliman-mobx-redux.jpg"
                width={950}
                height={500}
              />
            }
            rightChild={
              <Copy copy="One learning experience I encountered was iteratively replacing the data management system from MobX to Redux. This meant adding custom middleware that connected the two together. Migrating components became second nature during development." />
            }
          />
        </Styled.SectionContainer>

        <Footer nextObj={nextUp.milliman} />
      </Styled.Page>
    </>
  );
};

export default NiteLadder;
