import { NavBody, NavLink, HomeLink } from './NavBarStyle'

const NavBar = () => {
  return (
    <NavBody>
      <div>
        <HomeLink href="/">Home</HomeLink>
      </div>
      <div>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </NavBody>
  )
}

export default NavBar
