import type { NextPage } from "next";
import Head from "next/head";
import Styled from "@pages/index.style";
import Hero from "@components/Hero/Hero";
import ContentBreak from "@components/ContentBreak/ContentBreak";
import Footer from "@components/Footer/Footer";
import ProfileImage from "@components/ProfileImage/ProfileImage";

const TECH = [
  "node.svg",
  "express.svg",
  "mysql.svg",
  "nextjs.svg",
  "react.svg",
  "typescript.svg",
  "jest.svg",
  "electron.svg",
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>William Cox | Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Styled.Page>
        <Hero title="Hi, I'm Will" tech={TECH} brand="brand">
          <ProfileImage />
        </Hero>

        <Styled.IntroContainer>
          <Styled.Intro>
            Software engineer specializing in Next.js/Node.js with TypeScript
          </Styled.Intro>
        </Styled.IntroContainer>

        <Styled.ContentContainer>
          <Styled.ContentBreakContainer>
            <ContentBreak
              icon="portfolio.svg"
              header="Experiences"
              copy="Check out my best work!"
            />
          </Styled.ContentBreakContainer>

          <Styled.WorkContainer>
            <Styled.Work href="/milliman">
              <Styled.WorkBorder />
              <Styled.WorkLogoContainer>
                <Styled.WorkLogo src="milliman.svg" />
                <Styled.WorkName>Milliman LTS</Styled.WorkName>
              </Styled.WorkLogoContainer>
              <Styled.WorkCopy>
                I was hired to bring my Typescript, Redux, and Jest expertise to
                Milliman&apos;s electron app. I&apos;ve since introduced other
                software like RTK Query and Ag Grid.
              </Styled.WorkCopy>
              <Styled.SeeMore>See More</Styled.SeeMore>
            </Styled.Work>

            <Styled.Work href="/hubsuite">
              <Styled.WorkBorder />
              <Styled.WorkLogoContainer>
                <Styled.WorkLogo src="hubsuite.svg" />
                <Styled.WorkName>Hubsuite</Styled.WorkName>
              </Styled.WorkLogoContainer>
              <Styled.WorkCopy>
                A web app I built with Next and Node. I was hired to develop
                software that would display KPIs for franchisees trying to
                improve their business.
              </Styled.WorkCopy>
              <Styled.SeeMore>See More</Styled.SeeMore>
            </Styled.Work>

            <Styled.Work href="/niteladder">
              <Styled.WorkBorder />
              <Styled.WorkLogoContainer>
                <Styled.WorkLogo src="niteladder.svg" />
                <Styled.WorkName>Nite Ladder</Styled.WorkName>
              </Styled.WorkLogoContainer>
              <Styled.WorkCopy>
                A desktop app I built with Electron using React. Nite Ladder is
                a Windows PC Fortnite plugin used to rank players in the
                competitive community.
              </Styled.WorkCopy>
              <Styled.SeeMore>See More</Styled.SeeMore>
            </Styled.Work>

            <Styled.Work href="/dmvp">
              <Styled.WorkBorder />
              <Styled.WorkLogoContainer>
                <Styled.WorkLogo src="dmvp.svg" />
                <Styled.WorkName>DMVP</Styled.WorkName>
              </Styled.WorkLogoContainer>
              <Styled.WorkCopy>
                A mobile app I built with React Native. Using a live API, DMVP
                (Daily Most Valuable Player) ranks NBA players while providing
                data visualization.
              </Styled.WorkCopy>
              <Styled.SeeMore>See More</Styled.SeeMore>
            </Styled.Work>
          </Styled.WorkContainer>
        </Styled.ContentContainer>

        <Footer />
      </Styled.Page>
    </>
  );
};

export default Home;
