import { NavBody, NavLink, HomeLink } from './NavBarStyle'

const NavBar = () => {
  return (
    <NavBody>
      <div>
        <HomeLink href="/">Home</HomeLink>
      </div>
      <div>
        <NavLink>About</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </NavBody>
  )
}

export default NavBar
