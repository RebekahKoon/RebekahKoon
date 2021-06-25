import styled from 'styled-components'

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

    @media (max-width: 960px) {
      font-size: 3rem;
    }
  }

  p {
    color: var(--lightGray);
    line-height: 3rem;
    font-size: 1.75rem;
  }
`

export default DescriptionContainer
