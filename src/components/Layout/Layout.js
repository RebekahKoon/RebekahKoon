import { Meta } from '../Meta'
import { GlobalStyle } from '../styles'
import NavBar from '../NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <NavBar />
      {children}
    </>
  )
}

export default Layout
