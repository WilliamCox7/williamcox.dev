import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@components/Hero/Hero";
import HeroImage from "@components/HeroImage/HeroImage";
import ContentBreak from "@components/ContentBreak/ContentBreak";
import PreserveImage from "@components/PreserveImage/PreserveImage";
import Copy from "@components/Copy/Copy";
import SplitScreen from "@components/SplitScreen/SplitScreen";
import Footer from "@components/Footer/Footer";
import Styled from "@pages/niteladder/index.style";
import nextUp from "@data/next-up.json";
import theme from "@theme";

const TECH = [
  "node.svg",
  "express.svg",
  "mysql.svg",
  "react.svg",
  "electron.svg",
];

const NiteLadder: NextPage = () => {
  return (
    <>
      <Head>
        <title>William Cox | Nite Ladder</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Styled.Page>
        <Hero title="Nite Ladder" tech={TECH} brand="niteladder">
          <HeroImage>
            <Styled.LogoContainer>
              <Styled.Logo src="niteladder.svg" />
            </Styled.LogoContainer>
          </HeroImage>
        </Hero>

        <Styled.IntroContainer>
          <Styled.Intro>
            Electron.js application dependent on a Node.js backend
          </Styled.Intro>
        </Styled.IntroContainer>

        <Styled.SectionContainer>
          <ContentBreak
            icon="portfolio.svg"
            header="Case Study"
            copy="Short summary about a desktop app I built"
          />
          <PreserveImage
            src="/niteladder-screenshot.jpeg"
            initWidth={1500}
            initHeight={900}
            width={1000}
            height={600}
            quality={100}
          />
          <Styled.CopyContainer>
            <Copy
              header="This has sadly been discontinued but please visit niteladder.com!"
              cta={
                <Styled.Button
                  target="_blank"
                  href="https://www.niteladder.com/learn-more"
                >
                  Go To Landing Page
                </Styled.Button>
              }
            />
          </Styled.CopyContainer>
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="Setting" copy="What am I trying to do here?" />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Copy copy="Fortnite's competitive playlist didn't incentivize smart or quality gameplay. So I wrote an app that gives players something to play for." />
            }
            rightChild={
              <Styled.ResponsiveImage
                src="/niteladder-fortnite.jpg"
                width={400}
                height={600}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak
            header="Architecture"
            copy="Electron.js + Node.js + MySQL"
          />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage
                src="/niteladder-architecture.svg"
                width={640}
                height={538}
              />
            }
            rightChild={
              <Copy copy="My app parses game replay files and converts it into measurable data." />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak
            header="Parsing Game Files"
            copy="How I'm getting the data"
          />
          <SplitScreen
            wrap="2000px"
            column
            leftChild={
              <Copy
                wide
                copy="The electron app creates a child process that watches a directory where game files are managed. When a file is updated, it checks for an encryption key. With that key, it steps through and finds stats like eliminations and placement."
              />
            }
            rightChild={
              <PreserveImage
                src="/niteladder-watcher.png"
                width={838}
                height={586}
                quality={100}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak header="Post Mortem" copy="Why didn't this take off?" />
          <Copy
            wide
            copy="I really hit a wall when it came to marketing the app. I had a moment of excitement when a Twitch streamer was using my app every day but he averaged 10 viewers so it just didn't get anywhere. I will likely re-visit this one someday in the future."
          />
        </Styled.SectionContainer>

        <Footer nextObj={nextUp.niteladder} />
      </Styled.Page>
    </>
  );
};

export default NiteLadder;
