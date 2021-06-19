import { Meta } from '../Meta'
import { GlobalStyle } from '../styles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      {children}
    </>
  )
}

export default Layout
