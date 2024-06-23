import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginCard = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border: none;
  border-radius: 10px;
  padding: 30px 15px 15px 15px;
`
export const WebsiteLogo = styled.img`
  width: 130px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  min-width: 300px;
  max-width: 450px;
  margin-top: 10px;
`
export const FormLabel = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 800;
  margin-top: 25px;
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  background-color: transparent;
  border: 1px solid #64748b;
  border-radius: 2px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 10px;
  width: 100%;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  padding: 0;
`

export const FormCheckbox = styled.input`
  size: 40;
  margin-right: 10px;
  padding-left: 0;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #f9f9f9;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
  cursor: pointer;
  outline: none;
`
export const LoginErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  align-self: flex-start;
`
