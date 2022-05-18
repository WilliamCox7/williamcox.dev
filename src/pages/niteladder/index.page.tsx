import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@components/Hero/Hero'
import HeroImage from '@components/HeroImage/HeroImage'
import ContentBreak from '@components/ContentBreak/ContentBreak'
import Styled from '@pages/niteladder/index.style'

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
          <Styled.Screenshot src="niteladder-screenshot.jpeg" />
        </Styled.SectionContainer>

      </Styled.Page>
    </>
  );
}

export default NiteLadder;