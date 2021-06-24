import { useRouter } from 'next/router'
import { NavBody, NavLink, HomeLink } from './NavBarStyle'

const NavBar = () => {
  const router = useRouter()

  return (
    <NavBody>
      <div>
        <HomeLink href="/" className={router.pathname === '/' ? 'active' : ''}>
          Home
        </HomeLink>
      </div>
      <div>
        <NavLink href="/about" className={router.pathname === '/about' ? 'active' : ''}>
          About
        </NavLink>
        <NavLink href="/projects" className={router.pathname === '/projects' ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>
          Contact
        </NavLink>
      </div>
    </NavBody>
  )
}

export default NavBar
