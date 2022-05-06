import type { NextPage } from 'next'
import Head from 'next/head'
import Styled from '@pages/index.style'
import ProfileImage from '@components/ProfileImage/ProfileImage'
import Bubbles from '@components/Bubbles/Bubbles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>William Cox</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Styled.Page>
        <Styled.HeroContainer>
          <Styled.Motherboard src="motherboard.jpeg" />
          <Styled.BubblesContainer>
            <Styled.Github>
              <Styled.Link target="_blank" href="https://github.com/WilliamCox7">
                <Styled.LinkImage src="github.svg" />
                <Styled.LinkText>WilliamCox7</Styled.LinkText>
              </Styled.Link>
            </Styled.Github>
            <Styled.Linkedin>
              <Styled.Link target="_blank" href="https://www.linkedin.com/in/william-cox/">
                <Styled.LinkImage src="linkedin.svg" />
                <Styled.LinkText>/in/william-cox</Styled.LinkText>
              </Styled.Link>
            </Styled.Linkedin>
            <Styled.Linkedin />
            <ProfileImage />
            <Bubbles />
            <Styled.Name>Hi, I&apos;m Will</Styled.Name>
          </Styled.BubblesContainer>
        </Styled.HeroContainer>
        <Styled.IntroContainer>
          <Styled.Intro>Software engineer specializing in Next.js and Node.js with TypeScript</Styled.Intro>
        </Styled.IntroContainer>
        <Styled.ContentContainer>
          <Styled.ContentHeaderContainer>
            <Styled.ContentHeaderImage src="portfolio.svg" />
            <Styled.ContentHeader>Portfolio</Styled.ContentHeader>
          </Styled.ContentHeaderContainer>
          <Styled.LinesContainer>
            <Styled.Line1 />
            <Styled.Line2 />
            <Styled.PortfolioExplanation>Check out my best work!</Styled.PortfolioExplanation>
          </Styled.LinesContainer>
          <Styled.WorkContainer>
            <Styled.Work href="/niteladder">
              <Styled.WorkBorder />
              <Styled.WorkLogoContainer>
                <Styled.WorkLogo src="niteladder.svg" />
                <Styled.WorkName>Nite Ladder</Styled.WorkName>
              </Styled.WorkLogoContainer>
              <Styled.WorkCopy>
                A desktop app I built with Electron using React. Nite Ladder is a
                Windows PC Fortnite plugin used to rank players in the competitive
                community.
              </Styled.WorkCopy>
              <Styled.SeeMore>See More!</Styled.SeeMore>
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
              <Styled.SeeMore>See More!</Styled.SeeMore>
            </Styled.Work>
            <Styled.Work href="/hubsuite">
              <Styled.WorkBorder />
              <Styled.WorkLogoContainer>
                <Styled.WorkLogo src="hubsuite.svg" />
                <Styled.WorkName>Hubsuite</Styled.WorkName>
              </Styled.WorkLogoContainer>
              <Styled.WorkCopy>
                A web app I built with Next and Node. I was hired to develop software
                that would display KPIs for franchisees trying to improve their
                business.
              </Styled.WorkCopy>
              <Styled.SeeMore>See More!</Styled.SeeMore>
            </Styled.Work>
          </Styled.WorkContainer>
        </Styled.ContentContainer>
      </Styled.Page>
    </>
  )
}

export default Home
