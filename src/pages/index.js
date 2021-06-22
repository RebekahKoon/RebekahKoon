import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'
import { TopTriangle } from '../components/styles'
import { ButtonBorder } from '../components/Button'

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15rem;
`

const DescriptionContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    color: var(--orange);
    font-size: 4.5rem;
  }

  p {
    color: var(--lightGray);
    line-height: 3rem;
    font-size: 1.75rem;
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
  }
`

const ProjectTriangle = styled(TopTriangle)`
  border-top: 6.25rem solid var(--white);
  background-color: var(--lighterGray);
`

const ProjectImage = styled.section`
  width: 40%;
  display: flex;
  margin: 0 auto;
  align-content: center;
  align-items: center;
  justify-content: center;

  img {
    box-shadow: 0px 50px 0px 16px var(--lighterGray);
    width: 90%;
  }
`

const ProjectDescription = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: none;

  h3 {
    color: var(--blue);
    font-size: 2.5rem;
    line-height: 0rem;
  }

  p {
    color: var(--gray);
    line-height: 3rem;
    font-size: 1.5rem;
  }
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
  }
`

export const ProjectsButton = styled(ButtonBorder)`
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
            A job tracking website that utilizes React on the front-end and GraphQL powered by
            Apollo Server for our back-end.
          </p>
          <ProjectsButton>View More</ProjectsButton>
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
