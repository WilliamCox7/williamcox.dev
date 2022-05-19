import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@components/Hero/Hero'
import HeroImage from '@components/HeroImage/HeroImage'
import ContentBreak from '@components/ContentBreak/ContentBreak'
import Copy from '@components/Copy/Copy'
import SplitScreen from '@components/SplitScreen/SplitScreen'
import Footer from '@components/Footer/Footer'
import Styled from '@pages/niteladder/index.style'
import nextUp from '@data/next-up.json'
import theme from '@theme'

const TECH = [
  'node.svg',
  'express.svg',
  'mysql.svg',
  'react.svg',
  'electron.svg',
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
          <Styled.Intro>Electron.js application dependent on a Node.js backend</Styled.Intro>
        </Styled.IntroContainer>

        <Styled.SectionContainer>
          <ContentBreak icon="portfolio.svg" header="Case Study" copy="Short summary about a desktop app I wrote" />
          <Styled.PreserveImage responsive="1500px">
            <Styled.NonResponsiveImage src="niteladder-screenshot.jpeg" />
          </Styled.PreserveImage>
          <Styled.CopyContainer>
            <Copy header="You can download my app on Windows PC!" cta={
              <Styled.Button target="_blank" href="https://www.niteladder.com">Go To Landing Page</Styled.Button>
            } />
          </Styled.CopyContainer>
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="Setting" copy="What am I trying to do here?" />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Copy copy="Fortnite doesn't have a ranked mode. It has a competitive playlist but it doesn't really incentivize smart or quality gameplay. So I wrote an app that gives players something to play for." />
            }
            rightChild={
              <Styled.ResponsiveImage src="niteladder-fortnite.jpg" />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak header="Architecture" copy="Electron.js + Node.js + MySQL" />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage src="niteladder-architecture.jpeg" />
            }
            rightChild={
              <Copy copy="My app forwards data it parses from the game replay file Fortnite emits while you play and stores it in a MySQL database." />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="Parsing Game Files" copy="How I'm getting the data" />
          <SplitScreen
            wrap="2000px"
            column
            leftChild={
              <Copy wide copy="The electron app creates a child process that watches a directory where game files are managed. When a file is updated, it checks for an encryption key. With that key, it steps through and finds stats like eliminations and placement." />
            }
            rightChild={
              <Styled.PreserveImage>
                <Styled.NonResponsiveImage src="niteladder-watcher.png" />
              </Styled.PreserveImage>
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak header="What This Achieves" copy="What do my users get out of this?" />
          <SplitScreen
            wrap="2000px"
            column
            noReverse
            leftChild={
              <Styled.ResponsiveImage src="niteladder-format.jpg" />
            }
            rightChild={
              <Copy wide copy="Normally in Fortnite, players just try to get as many eliminations as they can. This leads to bad gameplay. To combat this, my app awards more points to players who get eliminations in the late part of the match. This causes players to be smart and cautious which provides a better experience for everyone." />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Copy copy="The app displays a histogram which shows the distribution of users on the ranked ladder. Seeing where you rank relative to the community provides a desire to play well in each game you are a part of." />
            }
            rightChild={
              <Styled.ResponsiveImage src="niteladder-ladder.jpg" />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage src="niteladder-fare.jpg" />
            }
            rightChild={
              <Copy copy="Lastly, my app has a pay-to-play system. The higher you climb on the ladder, the more expensive the &quot;fare&quot; is. This gives meaning to your ranking." />
            } />
        </Styled.SectionContainer>

        <Footer nextObj={nextUp.niteladder} />

      </Styled.Page>
    </>
  );
}

export default NiteLadder;