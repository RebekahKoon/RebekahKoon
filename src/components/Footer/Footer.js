import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import {
  FooterContainer,
  FooterColumn,
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
        <FooterColumn style={{ marginRight: '9rem' }}>
          <h2>Let's Talk!</h2>
          <p>Interested in hiring me for a project?</p>
          <ButtonLink href="/contact">
            <ContactButton>Contact Me</ContactButton>
          </ButtonLink>
          <br />
        </FooterColumn>
        <FooterColumn style={{ marginLeft: '9rem' }}>
          <FooterLink href="mailto: koonrebekah@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>koonrebekah@gmail.com
          </FooterLink>
          <FooterLink href="https://github.com/RebekahKoon/">
            <i className="fab fa-github-alt fa-lg"></i>Find Me on GitHub
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/rebekah-koon-b01a7214a/">
            <i className="fab fa-linkedin fa-lg"></i>Connect on LinkedIn
          </FooterLink>
        </FooterColumn>
      </FooterContainer>
    </>
  )
}

export default Footer
