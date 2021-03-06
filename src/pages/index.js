import styled from 'styled-components'
import Layout from '../components/Layout'
import { ButtonBorder } from '../components/Button'
import {
  MainContentContainer,
  HeaderContainer,
  TopTriangle,
  SectionContainer,
  ProjectDescription,
  ProjectImage,
} from '../components/styles'

const DescriptionContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    color: var(--orange);
    font-size: 4.5rem;

    @media (max-width: 960px) {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }

  p {
    color: var(--lightGray);
    line-height: 3rem;
    font-size: 1.75rem;

    @media (max-width: 960px) {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 960px) {
    margin-bottom: 2.5rem;
    width: 75%;
  }
`

const AboutImageContainer = styled.section`
  width: 50%;
  display: flex;
  margin: 0 auto;
  align-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    box-shadow: 1.5rem 0 var(--yellow);
    margin-left: 5em;
    width: 80%;

    @media (max-width: 960px) {
      margin-left: 0;
      width: 75%;
    }
  }
`

const ProjectTriangle = styled(TopTriangle)`
  border-top: 6.25rem solid var(--white);
  background-color: var(--lighterGray);
`

const QuoteBackground = styled(HeaderContainer)`
  background-color: var(--lighterGray);
`

const QuoteContainer = styled.section`
  width: 100vw;
  background-image: url('/quotes.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto;
  width: 70%;
  margin: 0 auto;
  justify-content: center;
  padding: 15rem 0;
  font-size: 1.25rem;

  p {
    line-height: 4rem;
    font-size: 1.75rem;

    @media (max-width: 960px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 960px) {
    padding: 10rem 0;
    width: 75%;
    background-image: none;
    font-size: 0.875rem;
  }
`

const ProjectsButton = styled(ButtonBorder)`
  width: 12.5rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  border: 3px solid var(--blue);
  color: var(--blue);

  :hover {
    border: 3px solid var(--blue);
    color: var(--white);
  }

  @media (max-width: 960px) {
    width: 8rem;
    font-size: 1.25rem;
    padding: 1rem 0.5rem;
  }
`

const ButtonLink = styled.a`
  width: 12.5rem;
`

const Index = () => (
  <Layout isGray={true}>
    <HeaderContainer>
      <MainContentContainer>
        <SectionContainer>
          <DescriptionContainer>
            <h1>Hi, I'm Rebekah</h1>
            <p>
              I'm a full-stack developer located in Oregon. As a recent graduate, I would be
              thrilled to put my skills to use on a team that delivers exceptional projects to the
              world.
            </p>
          </DescriptionContainer>
          <AboutImageContainer>
            <img src="/rebekah.png" />
          </AboutImageContainer>
        </SectionContainer>
      </MainContentContainer>
    </HeaderContainer>
    <TopTriangle />
    <MainContentContainer>
      <h2>Sample Project</h2>
      <hr />
      <SectionContainer>
        <ProjectDescription>
          <h3>Adept</h3>
          <p>
            A job tracking web app that utilizes React/Next.JS on the front-end and GraphQL powered
            by Apollo Server for our back-end. Offers account creation for both employers and job
            seekers.
          </p>
          <ButtonLink href="/projects">
            <ProjectsButton>View More</ProjectsButton>
          </ButtonLink>
        </ProjectDescription>
        <ProjectImage>
          <img src="/adept.png" />
        </ProjectImage>
      </SectionContainer>
    </MainContentContainer>
    <ProjectTriangle />
    <QuoteBackground>
      <QuoteContainer>
        <p>
          Rebekah is delightful to work with! In addition to her dedication and ability, I have been
          very impressed by, and appreciative of, her flexibility. She has taken direction with
          minimal clarification and then started and completed her tasks with very minimal
          oversight. As tasks arise, the abilities to think for oneself and make good decisions in
          any setting are essential.
        </p>
        --Brenda Brainard, 4J Natives Program
      </QuoteContainer>
    </QuoteBackground>
  </Layout>
)

export default Index
