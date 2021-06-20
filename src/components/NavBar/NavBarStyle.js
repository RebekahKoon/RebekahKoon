import styled from 'styled-components'

export const NavBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  margin: 0;
  align-items: right;
  align-content: right;
  text-align: right;
  background-color: var(--blue);
  box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.13);
`

export const NavLink = styled.a`
  font-weight: bolder;
  font-size: 1.25rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--white);
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
    height: 5px;
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
`

export const HomeLink = styled(NavLink)`
  align-items: left;
  align-content: left;
  text-align: left;
`

export default NavBody
