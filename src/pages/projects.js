import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'
import { TopTriangle } from '../components/styles'
import { DescriptionContainer } from '../components/styles'

const Projects = () => {
  return (
    <Layout>
      <HeaderContainer>
        <MainContentContainer>
          <DescriptionContainer>
            <h1>My Projects</h1>
            <p>Discover what projects I have been involved in.</p>
          </DescriptionContainer>
        </MainContentContainer>
      </HeaderContainer>
      <TopTriangle />
    </Layout>
  )
}

export default Projects
