import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@components/Hero/Hero'
import HeroImage from '@components/HeroImage/HeroImage'
import Styled from '@pages/dmvp/index.style'

const TECH = [
  'node.svg',
  'express.svg',
  'mysql.svg',
  'react.svg',
  'electron.svg',
];

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
          <Styled.Intro>Web application built with Next.js and Node.js</Styled.Intro>
        </Styled.IntroContainer>
      </Styled.Page>
    </>
  );
}

export default DMVP;