import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeAndSaveContext from '../../context/ThemeAndSaveContext'

import {
  LoginContainer,
  LoginCard,
  WebsiteLogo,
  FormContainer,
  FormLabel,
  FormInput,
  CheckboxContainer,
  FormCheckbox,
  CheckboxLabel,
  LoginButton,
  LoginErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrMsg: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderUsername = (labelTextColor, inputTextColor) => {
    const {username} = this.state

    return (
      <>
        <FormLabel htmlFor="username" color={labelTextColor}>
          USERNAME
        </FormLabel>
        <FormInput
          color={inputTextColor}
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = (labelTextColor, inputTextColor) => {
    const {password, showPassword} = this.state

    return (
      <>
        <FormLabel htmlFor="password" color={labelTextColor}>
          PASSWORD
        </FormLabel>
        <FormInput
          color={inputTextColor}
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderShowPassword = inputTextColor => (
    <CheckboxContainer>
      <FormCheckbox
        type="checkbox"
        id="showPassword"
        onChange={this.onChangeShowPassword}
      />
      <CheckboxLabel htmlFor="showPassword" color={inputTextColor}>
        Show Password
      </CheckboxLabel>
    </CheckboxContainer>
  )

  render() {
    return (
      <ThemeAndSaveContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect path="/" />
          }

          const bgColorContainer = isDarkTheme ? '#313131' : '#f9f9f9'
          const bgColorCard = isDarkTheme ? ' #0f0f0f' : '#f9f9f9'
          const labelTextColor = isDarkTheme ? '#ebebeb' : '#64748b'
          const inputTextColor = isDarkTheme ? '#f8fafc' : '#1e293b'

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const {showErrMsg, errorMsg} = this.state
          return (
            <LoginContainer bgColor={bgColorContainer}>
              <LoginCard bgColor={bgColorCard}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitLoginForm}>
                  {this.renderUsername(labelTextColor, inputTextColor)}
                  {this.renderPassword(labelTextColor, inputTextColor)}
                  {this.renderShowPassword(inputTextColor)}
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrMsg && <LoginErrorMsg>*{errorMsg}</LoginErrorMsg>}
                </FormContainer>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeAndSaveContext.Consumer>
    )
  }
}

export default Login
