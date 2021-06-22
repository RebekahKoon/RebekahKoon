import styled from 'styled-components'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'
import { TopTriangle } from '../components/styles'
import { DescriptionContainer } from '../components/styles'

const Contact = () => {
  return (
    <Layout showFooter={false}>
      <HeaderContainer>
        <MainContentContainer>
          <DescriptionContainer>
            <h1>Contact Me</h1>
            <p>Contact me about a project or opportunity.</p>
          </DescriptionContainer>
        </MainContentContainer>
      </HeaderContainer>
      <TopTriangle />
    </Layout>
  )
}

export default Contact
