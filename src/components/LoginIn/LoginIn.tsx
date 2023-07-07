import logoCampIn from '../../assets/image/logo-camp.png'
import logoLogOfIn from '../../assets/icon/icon-log-in.png'
import backgroundCar from '../../assets/image/image-car-desktop.png'

import {
  LogInContainer,
  LogoContainer,
  ButtonContainer,
  TitleLoginContainer,
  FormContainer,
  EmailContainer,
  EnvelopContainer,
  PasswordContainer,
  ShowPasswordContainer,
  CheckBoxContainer,
  FooterContainer,
  Container,
  ContainerPhoto,
  Paragraph,
} from './styles'
import { Envelope, LockSimple, EyeSlash, Eye } from '@phosphor-icons/react'
import { useState } from 'react'

export function LoginIn() {
  const [showPassword, setShowPassword] = useState(false)

  function togglePasswordVisibility() {
    setShowPassword((passShowPassword) => !passShowPassword)
  }

  return (
    <Container>
      <LogoContainer as="header">
        <a href="/">
          <img src={logoCampIn} alt="" />
        </a>
      </LogoContainer>
      <LogInContainer>
        <TitleLoginContainer>
          <div>
            <img src={logoLogOfIn} alt="" />
          </div>
          <h1>Login in</h1>
        </TitleLoginContainer>
        <Paragraph>
          <p>Enter your registration information.</p>
        </Paragraph>
        <FormContainer action="#" autoComplete="off">
          <EmailContainer>
            <label htmlFor="iemail">E-mail</label>
            <input
              placeholder="Enter your e-mail address"
              type="email"
              name="email"
              id="iemail"
              required
            />
            <EnvelopContainer>
              <Envelope size={30} />
            </EnvelopContainer>
          </EmailContainer>
          <PasswordContainer>
            <label htmlFor="ipassword">Password</label>
            <input
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="ipassword"
              required
            />
            <EnvelopContainer>
              <LockSimple size={30} />
            </EnvelopContainer>
            <ShowPasswordContainer onClick={togglePasswordVisibility}>
              {showPassword ? (
                <EyeSlash size={24} />
              ) : (
                <Eye size={24} color="#41A55B" />
              )}
            </ShowPasswordContainer>
          </PasswordContainer>
          <CheckBoxContainer>
            <input type="checkbox" name="checkbox" id="icheckbox" />
            <label htmlFor="icheckbox">Remind me</label>
            <a href="#">Forgot my password</a>
          </CheckBoxContainer>
          <ButtonContainer type="submit">Login in</ButtonContainer>
          <FooterContainer>
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </FooterContainer>
        </FormContainer>
      </LogInContainer>
      <ContainerPhoto
        style={{ backgroundImage: `url(${backgroundCar})` }}
      ></ContainerPhoto>
    </Container>
  )
}
