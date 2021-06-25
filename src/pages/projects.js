import styled from 'styled-components'
import Layout from '../components/Layout'
import { ButtonBorder } from '../components/Button'
import {
  MainContentContainer,
  HeaderContainer,
  TopTriangle,
  DescriptionContainer,
  SectionContainer,
  ProjectDescription,
  ProjectImage,
} from '../components/styles'

const ProjectSection = styled(SectionContainer)`
  margin-bottom: 10rem;

  @media (max-width: 960px) {
    margin-bottom: 2.5rem;
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

const StyledLink = styled.a`
  color: #8590aa;
  font-size: 1.125rem;
  padding: 0;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  :hover {
    color: var(--blue);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 960px) {
    font-size: 0.875rem;
  }
`

const RepoLinks = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2.5rem;
`

const ButtonLink = styled.a`
  width: 12.5rem;
`

const Projects = () => {
  return (
    <Layout>
      <HeaderContainer>
        <MainContentContainer>
          <DescriptionContainer>
            <h1>Projects</h1>
            <p>Discover what projects I have been involved in.</p>
          </DescriptionContainer>
        </MainContentContainer>
      </HeaderContainer>
      <TopTriangle />
      <MainContentContainer>
        <h2>Adept</h2>
        <hr />
        <ProjectSection>
          <ProjectDescription>
            <p>
              A job tracking web app that utilizes React/Next.JS on the front-end and GraphQL
              powered by Apollo Server for our back-end. Offers account creation for both employers
              and job seekers.
            </p>
            <ButtonLink href="https://adept.vercel.app/">
              <ProjectsButton>Go to Site</ProjectsButton>
            </ButtonLink>
            <RepoLinks>
              <StyledLink href="https://github.com/RebekahKoon/adept-ui">
                View front-end repository
              </StyledLink>
              <StyledLink href="https://github.com/devnguy/adept-graphql-server">
                View back-end repository
              </StyledLink>
            </RepoLinks>
          </ProjectDescription>
          <ProjectImage>
            <img src="/adept.png" />
          </ProjectImage>
        </ProjectSection>
        <h2>Hawkins Library</h2>
        <hr />
        <ProjectSection>
          <ProjectImage>
            <img src="/hawkins.png" />
          </ProjectImage>
          <ProjectDescription>
            <p>
              A CRUD app for keeping track of library books and events, which has a front-end
              utilizing React/Next.JS with hand-written MySQL queries to access data from our
              database.
            </p>
            <ButtonLink href="https://hawkins-library.vercel.app/">
              <ProjectsButton>Go to Site</ProjectsButton>
            </ButtonLink>
            <RepoLinks>
              <StyledLink href="https://github.com/devnguy/hawkins-library">
                View repository
              </StyledLink>
            </RepoLinks>
          </ProjectDescription>
        </ProjectSection>
        <h2>freeCodeCamp Contributer</h2>
        <hr />
        <ProjectSection>
          <ProjectDescription>
            <p>
              Participated in contributing to freeCodeCamp. This involved creating a pull request
              that was reviewed and approved by other contributers. The contribution added
              consistency across the JavaScript challenges offered through the website.
            </p>
            <ButtonLink href="https://www.freecodecamp.org/">
              <ProjectsButton>Go to Site</ProjectsButton>
            </ButtonLink>
            <RepoLinks>
              <StyledLink href="https://github.com/RebekahKoon/freeCodeCamp">
                View repository
              </StyledLink>
            </RepoLinks>
          </ProjectDescription>
          <ProjectImage>
            <img src="/freeCodeCamp.png" />
          </ProjectImage>
        </ProjectSection>
        <h2>Pet Shelter API</h2>
        <hr />
        <ProjectSection>
          <ProjectImage>
            <embed src="/pet_shelter.pdf" type="application/pdf" width="100%" height="500px" />
          </ProjectImage>
          <ProjectDescription>
            <p>
              REST API created through Node.JS. Users can perform CRUD functionality on API routes
              related to pets and shelters as well as create an account through Auth0. Postman tests
              were written to go along with the API.
            </p>
            <ButtonLink href="https://pet-adoption-api.wl.r.appspot.com/">
              <ProjectsButton>Go to Site</ProjectsButton>
            </ButtonLink>
            <RepoLinks>
              <StyledLink href="https://github.com/RebekahKoon/Pet-Shelter-API">
                View repository
              </StyledLink>
            </RepoLinks>
          </ProjectDescription>
        </ProjectSection>
      </MainContentContainer>
    </Layout>
  )
}

export default Projects
