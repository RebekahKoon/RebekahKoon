import styled from 'styled-components'

const ButtonBorder = styled.button`
  padding: 0.25rem 1rem;
  background: none;
  border: solid 1px var(--blue);
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  transform: scale(1) perspective(1px);
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background: var(--blue);
    border: solid 1px var(--blue);
    color: var(--white);
    transform: scale(1.125) perspective(1px);
    transition: all 0.2s ease-in-out;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
`

export default ButtonBorder
