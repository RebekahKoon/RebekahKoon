import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15rem;

  @media (max-width: 812px) {
    flex-direction: column;
    margin-bottom: 5rem;
    font-size: 0.5rem;
  }
`

export default SectionContainer
