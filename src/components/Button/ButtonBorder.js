import styled from 'styled-components'

const ButtonBorder = styled.button`
  padding: 0.25rem 1rem;
  background: none;
  transition: background 0.2s ease-in;
  border: solid 1px var(--blue);
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  :hover {
    cursor: pointer;
    background: var(--blue);
    transition: background 0.2s ease-in;
    border: solid 1px var(--blue);
    color: var(--white);
  }
`

export default ButtonBorder
