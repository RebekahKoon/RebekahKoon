import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20rem;
`

const DescriptionContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-bottom-left-radius: 50%;

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

const ImageContainer = styled.section`
  width: 50%;
  display: block;
  margin: 0 auto;
  align-content: center;
  align-items: center;

  img {
    box-shadow: 25px 25px 0px 5px var(--yellow);
    margin-left: 5em;
  }
`

// const Test = styled.div`
//   background-color: var(--white);
// `

const Index = () => (
  <Layout>
    <MainContentContainer>
      <AboutContainer>
        <DescriptionContainer>
          <h1>Hi, I'm Rebekah</h1>
          <p>
            I'm a full-stack developer located in Oregon. As a recent graduate, I'm currently
            looking for opportunities to broaden my horizons and help make the lives of others
            easier.
          </p>
        </DescriptionContainer>
        <ImageContainer>
          <img src="/Placeholder.png" style={{ width: '80%' }} />
        </ImageContainer>
      </AboutContainer>
    </MainContentContainer>
    {/* <Test> hi </Test> */}
  </Layout>
)

export default Index
