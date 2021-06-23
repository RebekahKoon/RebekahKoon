import { useState } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import Layout from '../components/Layout'
import { MainContentContainer } from '../components/styles'
import { HeaderContainer } from '../components/styles'
import { TopTriangle } from '../components/styles'
import { DescriptionContainer } from '../components/styles'
import { ButtonBorder } from '../components/Button'

const FormContainer = styled.form`
  width: 90%;
  max-width: 100%;
  display: grid;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 5rem;
  justify-items: center;

  h3 {
    padding-top: 0.5rem;
    font-size: 1.5rem;
    color: #14a76c;
  }
`

const StyledInput = styled.input`
  width: 48.825%;
  margin: 0 auto;
  box-shadow: none;
  padding: 1rem;
  border: 2px solid var(--lighterGray);
  border-radius: 0.125rem;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;
  color: var(--darkBlue);

  :focus {
    outline: none;
    border-color: var(--lightGray);
    transition: all 0.2s ease-in-out;
  }
`

const StyledTextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid var(--lighterGray);
  border-radius: 0.125rem;
  margin-bottom: 1.5rem;
  resize: none;
  transition: all 0.2s ease-in-out;
  color: var(--darkBlue);

  :focus {
    outline: none;
    border-color: var(--lightGray);
    transition: all 0.2s ease-in-out;
  }
`

const SubmitButton = styled(ButtonBorder)`
  width: 12.5rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  border: 3px solid var(--blue);
  color: var(--blue);

  :hover {
    border: 3px solid var(--blue);
    color: var(--white);
  }
`

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    let data = {
      name,
      email,
      message,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setTimeout(function () {
      setIsLoading(false)
    }, 2000)

    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Layout showFooter={false}>
      <HeaderContainer>
        <MainContentContainer>
          <DescriptionContainer>
            <h1>Contact Me</h1>
            <p>Contact me about a project or opportunity.</p>
          </DescriptionContainer>
        </MainContentContainer>
      </HeaderContainer>
      <TopTriangle />
      <MainContentContainer>
        <h2>I'm Available For Hire!</h2>
        <hr />
        <FormContainer
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <div style={{ width: '100%', justifyItems: 'center' }}>
            <StyledInput
              style={{ marginRight: '1.5rem' }}
              type="text"
              name="name"
              placeholder="Name"
              required={true}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              required={true}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <br />
          <StyledTextArea
            rows="8"
            name="message"
            placeholder="Message"
            required={true}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <br />
          {submitted === false ? (
            <SubmitButton type="submit">Submit</SubmitButton>
          ) : isLoading ? (
            <Loader type="ThreeDots" color="#374785" height={100} width={100} timeout={2000} />
          ) : (
            <h3>Submitted!</h3>
          )}
        </FormContainer>
      </MainContentContainer>
    </Layout>
  )
}

export default Contact
