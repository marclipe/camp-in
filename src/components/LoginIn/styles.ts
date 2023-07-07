import styled from 'styled-components'

export const Container = styled.section`
  display: flex;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`

export const LogInContainer = styled.main`
  padding: 0 1.25rem;
  p {
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    font-size: 0.875rem;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    margin: 5rem 4.625rem 0 0;
    margin-right: 4.625rem;
    width: 572px;
    height: 512px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 280px 0;
    border-radius: 8px;
  }
`

export const LogoContainer = styled.header`
  margin: 2.688rem 0 1.875rem 1.25rem;

  @media screen and (min-width: 768px) {
    margin-top: 1.25rem;
  }
`

export const TitleLoginContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;

  h1 {
    font-family: var(--fontPoppins);
    font-weight: 600;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textTitle};
    margin-bottom: 0.563rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: -16rem;
  }
`

export const Paragraph = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: -7rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.063rem;
`

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.colorTextButton};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.27px;
  text-transform: uppercase;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0.75rem 1.5rem;
  gap: 0.625rem;
  border-radius: 4px;
  cursor: pointer;

  margin: 1.063rem 0;

  &:hover {
    background-color: #2e8b57;
  }
`
export const EmailContainer = styled.div`
  input {
    width: 100%;
    height: 2.75rem;
    border-radius: 4px;
    border: 1px solid #4e4d4d;
    background: #2f2f2f;
    text-indent: 2.913rem;
    color: ${(props) => props.theme.placeHolderColor};
  }

  input:email {
    letter-spacing: 27px;
  }

  ::placeholder {
    color: ${(props) => props.theme.palceHolderColor};
    font-size: 0.875rem;
  }

  label {
    color: ${(props) => props.theme.textTitle};
    font-size: 1rem;
    font-weight: 500;
  }
`

export const EnvelopContainer = styled.span`
  position: relative;
  bottom: 38px;
  color: ${(props) => props.theme.primaryColor};
  padding-left: 0.75rem;
`
export const PasswordContainer = styled.div`
  input {
    width: 100%;
    height: 2.75rem;
    border-radius: 4px;
    border: 1px solid #4e4d4d;
    background: #2f2f2f;
    text-indent: 2.913rem;
    color: ${(props) => props.theme.placeHolderColor};
  }

  ::placeholder {
    color: ${(props) => props.theme.palceHolderColor};
    font-size: 0.875rem;
  }

  label {
    color: ${(props) => props.theme.textTitle};
    font-size: 1rem;
    font-weight: 500;
  }
`
export const ShowPasswordContainer = styled.div`
  cursor: pointer;
  color: #b0b0b0;
  position: relative;
  margin-left: 18.125rem;
  bottom: 4.375rem;

  @media screen and (min-width: 769px) {
    margin-left: 21rem;
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  input[type='checkbox'] {
    -webkit-appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 4px;
    border: 1px solid #4e4d4d;

    &:checked {
      background-color: #41a55b;
      color: #fff;
      text-align: center;
      font-size: 0.875rem;
    }
  }

  label {
    margin-left: 0.313rem;
    color: ${(props) => props.theme.textColor};
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    margin-left: 3.688rem;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    color: ${(props) => props.theme.primaryColor};
    font-size: 14px;
    font-weight: 400;
  }
`

export const ContainerPhoto = styled.section`
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 90vw;

  @media screen and (max-width: 600px) {
    display: none;
  }
`
