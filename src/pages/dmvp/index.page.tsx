import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@components/Hero/Hero";
import HeroImage from "@components/HeroImage/HeroImage";
import SplitScreen from "@components/SplitScreen/SplitScreen";
import ContentBreak from "@components/ContentBreak/ContentBreak";
import PreserveImage from "@components/PreserveImage/PreserveImage";
import Copy from "@components/Copy/Copy";
import Styled from "@pages/dmvp/index.style";
import Footer from "@components/Footer/Footer";
import nextUp from "@data/next-up.json";
import theme from "@theme";

const TECH = ["node.svg", "express.svg", "mysql.svg", "react.svg"];

const DMVP: NextPage = () => {
  return (
    <>
      <Head>
        <title>William Cox | DMVP</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Styled.Page>
        <Hero title="DMVP" tech={TECH} brand="dmvp">
          <HeroImage>
            <Styled.LogoContainer>
              <Styled.Logo src="dmvp.svg" />
            </Styled.LogoContainer>
          </HeroImage>
        </Hero>

        <Styled.IntroContainer>
          <Styled.Intro>
            Mobile application built with React Native and Node.js
          </Styled.Intro>
        </Styled.IntroContainer>

        <Styled.SectionContainer>
          <ContentBreak
            icon="portfolio.svg"
            header="Case Study"
            copy="A brief rundown on a mobile app I built"
          />
          <SplitScreen
            wrap="1370px"
            leftChild={
              <Styled.ResponsiveImage
                noShadow
                src="/dmvp-screenshot.png"
                width={338}
                height={700}
              />
            }
            rightChild={
              <Styled.CopyContainer>
                <Copy
                  header="Daily MVP is no longer active but check out my landing page!"
                  cta={
                    <Styled.Button
                      target="_blank"
                      href="https://dmvp-landing.herokuapp.com/"
                    >
                      Go To Landing Page
                    </Styled.Button>
                  }
                />
              </Styled.CopyContainer>
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak
            header="Setting"
            copy="What I was trying to accomplish"
          />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Copy copy="Every day, there is about 10 NBA games being played. I wanted to see a live ranking of player performances. So I built an app." />
            }
            rightChild={
              <Styled.ResponsiveImage
                src="/dmvp-nba.jpeg"
                width={711}
                height={400}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak
            header="Architecture"
            copy="Headless API with 3rd Party Data Ingestor"
          />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage
                src="/dmvp-architecture.svg"
                width={627}
                height={596}
              />
            }
            rightChild={
              <Copy copy='The 3rd party API I was using was very data heavy and did not have a delta option so I couldn&apos;t connect my app directly. Instead, I built a "REST Stop" server to filtrate data and seperate the expensive operations away from my headless API.' />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak
            header="Optimization"
            copy="Memory management and reducing complexity"
          />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Copy copy="My app had an large horizontal list of cards with charts that were constantly being updated. I kept the app from being a memory hog and wasting battery by eliminating every unnecessary render." />
            }
            rightChild={
              <PreserveImage
                src="/dmvp-usememo.png"
                width={524}
                height={572}
                quality={100}
              />
            }
          />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak
            header="Post Mortem"
            copy="Why didn't this go anywhere?"
          />
          <Copy
            wide
            copy="This was my first attempt at putting something out there in the world. I learned very quickly just how hard it is to get something off the ground. I attribute much of my success to the time I spent on this app."
          />
        </Styled.SectionContainer>

        <Footer nextObj={nextUp.dmvp} background={theme.colors.grey[1000]} />
      </Styled.Page>
    </>
  );
};

export default DMVP;
