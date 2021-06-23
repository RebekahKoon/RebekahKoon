import styled from 'styled-components'

export const ProjectImage = styled.section`
  width: 40%;
  display: flex;
  margin: 0 auto;
  align-content: center;
  align-items: center;
  justify-content: center;

  img {
    border: 2px solid var(--lighterGray);
    border-radius: 0.5rem;
    width: 90%;
  }
`

export const ProjectDescription = styled.section`
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

export default ProjectDescription
