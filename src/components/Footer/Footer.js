import {
  FooterContainer,
  FooterColumn,
  TopTriangle,
  BottomTriangle,
  ContactButton,
  FooterLink,
} from './FooterStyle'
import { ButtonBorder } from '../Button'

const Footer = () => {
  return (
    <>
      <TopTriangle />
      <BottomTriangle />
      <FooterContainer>
        <FooterColumn style={{ marginRight: '9rem' }}>
          <h2>Let's Talk!</h2>
          <p>Want to discuss something with me?</p>
          <ContactButton>Contact Me</ContactButton>
        </FooterColumn>
        <FooterColumn style={{ marginLeft: '9rem' }}>
          <FooterLink href="mailto: koonrebekah@gmail.com">koonrebekah@gmail.com</FooterLink>
          <FooterLink href="https://github.com/RebekahKoon/">Find Me on GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/rebekah-koon-b01a7214a/">
            Find Me on LinkedIn
          </FooterLink>
        </FooterColumn>
      </FooterContainer>
    </>
  )
}

export default Footer
