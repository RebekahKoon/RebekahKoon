import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'

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

const TopTriangle = styled.div`
  width: 100vw;
  height: 0;
  border-top: 6.25rem solid var(--darkBlue);
  border-left: 100vw solid transparent;
`

const ProjectImage = styled.section`
  width: 35%;
  display: flex;
  margin: 0 auto;
  align-content: center;
  align-items: center;

  img {
    margin-left: 5em;
    box-shadow: 0px 50px 0px 16px rgba(0, 0, 0, 0.15);
    width: 90%;
  }
`

const ProjectDescription = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h3 {
    color: var(--blue);
    font-size: 2.5rem;
    line-height: 0rem;
  }

  p {
    color: var(--lightGray);
    line-height: 3rem;
    font-size: 1.75rem;
  }
`

const Index = () => (
  <Layout>
    <HeaderContainer>
      <MainContentContainer>
        <SectionContainer>
          <DescriptionContainer>
            <h1>Hi, I'm Rebekah</h1>
            <p>
              I'm a full-stack developer located in Oregon. As a recent graduate, I'm currently
              looking for opportunities to broaden my horizons and help make the lives of others
              easier.
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
      <h2>Projects</h2>
      <hr />
      <SectionContainer>
        <ProjectDescription>
          <h3>Adept</h3>
        </ProjectDescription>
        <ProjectImage>
          <img src="/adept.png" />
        </ProjectImage>
      </SectionContainer>
    </MainContentContainer>
  </Layout>
)

export default Index
