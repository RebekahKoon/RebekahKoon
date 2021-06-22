import styled from 'styled-components'
import { Meta } from '../Meta'
import { GlobalStyle } from '../styles'
import NavBar from '../NavBar'
import Footer from '../Footer'

const Wrapper = styled.div`
  -webkit-animation: fadein 1s;
  -moz-animation: fadein 1s;
  -ms-animation: fadein 1s;
  -o-animation: fadein 1s;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Layout = ({ children, isGray = false, showFooter = true }) => {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <NavBar />
      {children}
      {showFooter && <Footer isGray={isGray} />}
    </>
  )
}

export default Layout
