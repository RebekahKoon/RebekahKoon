import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import {
  FooterContainer,
  ColumnLeft,
  ColumnRight,
  BottomTriangle,
  ContactButton,
  FooterLink,
  ButtonLink,
} from './FooterStyle'

const Footer = ({ isGray }) => {
  return (
    <>
      <BottomTriangle style={{ backgroundColor: !isGray && 'white' }} />
      <FooterContainer>
        <ColumnLeft>
          <h2>Let's Talk!</h2>
          <p>Interested in hiring me for a project?</p>
          <ButtonLink href="/contact">
            <ContactButton>Contact Me</ContactButton>
          </ButtonLink>
          <br />
        </ColumnLeft>
        <ColumnRight>
          <FooterLink href="mailto: koonrebekah@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>koonrebekah@gmail.com
          </FooterLink>
          <FooterLink href="https://github.com/RebekahKoon/">
            <i className="fab fa-github-alt fa-lg"></i>Find Me on GitHub
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/rebekah-koon-b01a7214a/">
            <i className="fab fa-linkedin fa-lg"></i>Connect on LinkedIn
          </FooterLink>
        </ColumnRight>
      </FooterContainer>
    </>
  )
}

export default Footer
