import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'

const AboutContainer = styled.div`
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

const ImageContainer = styled.section`
  width: 50%;
  display: block;
  margin: 0 auto;
  align-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    box-shadow: 1.5rem 0 var(--yellow);
    margin-left: 5em;
  }
`

const TopTriangle = styled.div`
  width: 100vw;
  height: 0;
  border-top: 6.25rem solid var(--darkBlue);
  border-left: 100vw solid transparent;
`

const Test = styled.div`
  width: 100%;
  background-color: var(--white);
  padding-bottom: 2.5rem;
`

const Index = () => (
  <Layout>
    <HeaderContainer>
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
            <img src="/rebekah.png" style={{ width: '80%' }} />
          </ImageContainer>
        </AboutContainer>
      </MainContentContainer>
    </HeaderContainer>
    <TopTriangle />
    <MainContentContainer>
      <Test> hi </Test>
    </MainContentContainer>
  </Layout>
)

export default Index
