import styled from 'styled-components'
import { ButtonBorder } from '../Button'

export const FooterContainer = styled.div`
  width: 100%;
  padding: 11rem 0;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: var(--darkerBlue);
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  h2 {
    margin: 1.25rem 0;
    font-size: 2.5rem;
    color: var(--orange);
  }

  h3 {
    margin: 1.25rem 0;
    line-height: 2.5rem;
    font-size: 1.25rem;
    color: var(--lightGray);
    text-transform: uppercase;
  }

  p {
    color: var(--lightGray);
    line-height: 3rem;
    font-size: 1.5rem;
  }
`

export const FooterLink = styled.a`
  font-weight: bolder;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--white);
  letter-spacing: 0.125rem;
  padding: 1.25rem 0rem;
  margin: 0rem 1.25rem;
  position: relative;
  opacity: 0.75;
  transition: all 0.2s ease-in-out;
  /* display: inline-block; */

  :hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  /* ::before {
    transition: 300ms;
    height: 2px;
    content: '';
    position: absolute;
    background-color: var(--orange);
    width: 100%;
    bottom: 5px;
    opacity: 0;
  }

  :hover::before {
    bottom: 10px;
    opacity: 1;
  } */

  .fa-linkedin,
  .fa-github-alt,
  .fa-envelope {
    color: var(--blue);
    margin-right: 1rem;
  }
`

export const BottomTriangle = styled.div`
  width: 100vw;
  height: 0;
  border-bottom: 6.25rem solid var(--darkerBlue);
  border-right: 100vw solid transparent;
  background-color: var(--lighterGray);
`

export const TopTriangle = styled.div`
  width: 100vw;
  height: 0;
  border-top: 6.25rem solid var(--white);
  border-left: 100vw solid transparent;
`

export const FooterColumn = styled.section`
  /* width: 30%; */
  display: flex;
  flex-direction: column;
  color: var(--lightGray);
`

export const ContactButton = styled(ButtonBorder)`
  width: 12.5rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  border: 3px solid var(--blue);

  :hover {
    border: 3px solid var(--blue);
  }
`

export const ButtonLink = styled.a`
  width: 12.5rem;
`

export default FooterContainer
