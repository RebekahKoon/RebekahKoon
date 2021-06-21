import styled from 'styled-components'
import { ButtonBorder } from '../Button'

export const FooterContainer = styled.div`
  width: 100%;
  padding: 11rem 0;
  justify-content: center;
  background: var(--darkerBlue);
  display: flex;
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
  display: inline-block;
  position: relative;
  opacity: 0.75;

  :hover {
    opacity: 1;
  }

  ::before {
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
  }

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
`

export const TopTriangle = styled.div`
  width: 100vw;
  height: 0;
  border-top: 6.25rem solid var(--white);
  border-left: 100vw solid transparent;
`

export const FooterColumn = styled.section`
  width: 30%;
  color: var(--lightGray);
`

export const ContactButton = styled(ButtonBorder)`
  width: 50%;
  padding: 1rem 0;
  font-size: 1.5rem;
  border-radius: 3rem;
  border: 3px solid var(--blue);

  :hover {
    border: 3px solid var(--blue);
  }
`

export default FooterContainer
