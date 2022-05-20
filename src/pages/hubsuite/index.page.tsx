import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@components/Hero/Hero'
import Copy from '@components/Copy/Copy'
import HeroImage from '@components/HeroImage/HeroImage'
import SplitScreen from '@components/SplitScreen/SplitScreen'
import ContentBreak from '@components/ContentBreak/ContentBreak'
import PreserveImage from '@components/PreserveImage/PreserveImage'
import Footer from '@components/Footer/Footer'
import Styled from '@pages/hubsuite/index.style'
import nextUp from '@data/next-up.json'
import theme from '@theme'

const TECH = [
  'node.svg',
  'express.svg',
  'mysql.svg',
  'nextjs.svg',
  'react.svg',
];

const Hubsuite: NextPage = () => {
  return (
    <>
      <Head>
        <title>William Cox | Hubsuite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Styled.Page>

        <Hero title="Hubsuite" tech={TECH} brand="hubsuite">
          <HeroImage>
            <Styled.LogoContainer>
              <Styled.Logo src="hubsuite.svg" />
            </Styled.LogoContainer>
          </HeroImage>
        </Hero>

        <Styled.IntroContainer>
          <Styled.Intro>Web application built with Next.js and Node.js</Styled.Intro>
        </Styled.IntroContainer>

        <Styled.SectionContainer>
          <Styled.ContentBreakWrapper>
            <ContentBreak icon="portfolio.svg" header="Case Study" copy="A quick glance into my experience at Hubsuite" />
          </Styled.ContentBreakWrapper>
          <SplitScreen
            wrap="1370px"
            leftSize="65%"
            leftChild={
              <Styled.ResponsiveImage noShadow src="/hubsuite-mb-screenshot.png" style={{ marginTop: '30px' }} width={850} height={459} />
            }
            rightSize="35%"
            rightChild={
              <Copy header="TL;DR - Check Out Hubsuite's Live Demo!" cta={
                <Styled.Button target="_blank" href="https://hub-client-staging.herokuapp.com/Hub/Demo">Go To Demo</Styled.Button>
              } />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="Setting" copy="What did the client need from me?" />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Copy copy="Hubsuite's founder had already created an incredible MySQL backend that fed their Tableau UI. As good as this was, they needed something faster, secure, responsive, and scalable." />
            }
            rightChild={
              <Styled.ResponsiveImage src="/hubsuite-services.jpeg" width={489} height={500} />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak header="RESTful API" copy="I added a headless API to sit on top" />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage src="/hubsuite-architecture.jpg" width={655} height={537} />
            }
            rightChild={
              <Copy copy="Their Tableau implementation was directly connected to their database which was being fed by a python data ingestor. I wrote a headless API to read the ingested data as well as manage users." />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="Magic Link" copy="Quick, secure, and simple" />
          <SplitScreen
            wrap="1250px"
            column
            leftChild={
              <Copy wide copy="I wrote a magic link auth system that created an easy experience for new and existing customers. Onboarding became seemless and customers were able to see results instantly." />
            }
            rightChild={
              <Styled.ResponsiveImage src="/hubsuite-signin.jpeg" width={696} height={460} />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak header="Custom Email Notifications" copy="Send an email when a franchise underperforms" />
          <SplitScreen
            wrap="1340px"
            leftChild={
              <Copy copy="I set up a cron job to run a query that finds clients who aren't reporting the minimum expectation. An email would then be dynamically built and sent to the client with the account manager cc'd." />
            }
            rightChild={
              <Styled.ResponsiveImage src="/hubsuite-email.jpg" width={851} height={686} />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="Memory Cache & CMS Image Optimization" copy="Each endpoint completely optimized" />
          <SplitScreen
            wrap="2000px"
            column
            leftChild={
              <Copy wide copy="The python ingestor was on a 24 hour interval. I took advantage of that window to cache each endpoint's response. Also, to ensure that all images added to the Webflow CMS were optimized, I listened for updated images and used Jimp to reduce image size." />
            }
            rightChild={
              <PreserveImage src="/hubsuite-memcache.png" width={790} height={554} quality={100} />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer>
          <ContentBreak header="Query Manager Custom CMS" copy="I built a small MySQL CMS" />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Styled.ResponsiveImage src="/hubsuite-query.jpg" width={552} height={398} />
            }
            rightChild={
              <Copy copy="Heavily protected, this CMS hosts custom MySQL queries on S3. My API would then read these files and build multiple statement queries depending on the need. This provided CRUD ops for their team without any deployment." />
            } />
        </Styled.SectionContainer>

        <Styled.SectionContainer background={theme.colors.grey[1000]}>
          <ContentBreak header="UI/UX" copy="I also have an eye for design" />
          <SplitScreen
            wrap="1340px"
            noReverse
            leftChild={
              <Copy copy="Provided with their design system, I was able to design a clean interface that allowed their customers to better understand how their businesses were performing." />
            }
            rightChild={
              <Styled.ResponsiveImage src="/hubsuite-design.jpeg" width={600} height={315} />
            } />
        </Styled.SectionContainer>

        <Footer nextObj={nextUp.hubsuite} background={theme.colors.grey[900]} />

      </Styled.Page>
    </>
  );
}

export default Hubsuite;