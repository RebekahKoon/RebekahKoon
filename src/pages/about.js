import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'
import { TopTriangle } from '../components/styles'

const DescriptionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 5rem;
  margin: 0 auto;

  h1 {
    color: var(--orange);
    font-size: 4.5rem;
    line-height: 0;
  }

  p {
    color: var(--lightGray);
    line-height: 3rem;
    font-size: 1.75rem;
  }
`

const SectionContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 10rem;

  p {
    color: var(--darkBlue);
    line-height: 3rem;
    font-size: 1.25rem;
  }
`

export const StyledGrid = styled.div`
  background-color: var(--white);
  border-radius: 10%;
  width: 85%;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: inline-grid;
  justify-items: center;
  text-align: left;
  grid-template-columns: repeat(5, minmax(50px, 300px));
  gap: 4rem 0rem;
  line-height: 1.25em;

  div {
    background-color: var(--lighterGray);
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    justify-items: center;
  }

  img {
    width: 55%;
    transform: scale(1) perspective(1px);
    transition: all 0.2s ease-in-out;
    /* background-color: var(--lighterGray); */
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 25%;

    :hover {
      box-shadow: 5px 5px 24px -7px rgba(0, 0, 0, 0.25);
      transform: scale(1.25) perspective(1px);
      transition: all 0.2s ease-in-out;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
  }
`

const GrayTriangle = styled(TopTriangle)`
  border-top: 6.25rem solid var(--white);
  background-color: var(--lighterGray);
`

const SkillsBackground = styled(HeaderContainer)`
  background-color: var(--lighterGray);
`

const About = () => {
  return (
    <Layout isGray={true}>
      <HeaderContainer>
        <MainContentContainer>
          <DescriptionContainer>
            <h1>About Me</h1>
            <p>Read more about me to discover who I am.</p>
          </DescriptionContainer>
        </MainContentContainer>
      </HeaderContainer>
      <TopTriangle />
      <MainContentContainer>
        <SectionContainer>
          <h2>Who is Rebekah?</h2>
          <hr />
          <p>
            My name is Rebekah and I'm from Eugene, OR. I originally pursued a career in education
            but later discovered a passion for programming. After taking some initial classes, I
            decided to switch careers and enroll at Oregon State University, where I received a
            bachelor's degree in Computer Science. I am interested in web development, primarily the
            back-end aspect. I hope to start a career at a company interested in improving the lives
            of others through technology.
          </p>
          <p>
            In my free time, I enjoy spending time with friends, family, and my dogs. I enjoy
            playing the piano and traveling to new places.
          </p>
        </SectionContainer>
      </MainContentContainer>
      <GrayTriangle />
      <SkillsBackground>
        <MainContentContainer>
          <SectionContainer>
            <h2>Rebekah's Skills</h2>
            <hr />
            <StyledGrid>
              {/* <div> */}
              <img src="/html.png" />
              {/* </div> */}
              <img src="/javascript.png" />
              <img src="/react.png" />
              <img src="mysql.png" />
              <img src="/graphql.png" />
              <img src="/prisma.png" />
              <img src="/nodejs.png" />
              <img src="/python.png" />
              <img src="c.png" />
              <img src="/cpp.png" />
              <img src="/git.png" />
              <img src="/vscode.png" />
              <img src="/amazon-aws.png" />
              <img src="/windows.png" />
              <img src="/apple.png" />
            </StyledGrid>
          </SectionContainer>
        </MainContentContainer>
      </SkillsBackground>
    </Layout>
  )
}

export default About
