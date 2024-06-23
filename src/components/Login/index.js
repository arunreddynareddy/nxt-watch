import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

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

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <FormLabel htmlFor="username">USERNAME</FormLabel>
        <FormInput
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state

    return (
      <>
        <FormLabel htmlFor="password">PASSWORD</FormLabel>
        <FormInput
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderShowPassword = () => (
    <CheckboxContainer>
      <FormCheckbox
        type="checkbox"
        id="showPassword"
        onChange={this.onChangeShowPassword}
      />
      <CheckboxLabel htmlFor="showPassword">Show Password</CheckboxLabel>
    </CheckboxContainer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect path="/" />
    }

    const {showErrMsg, errorMsg} = this.state
    return (
      <LoginContainer>
        <LoginCard>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onSubmitLoginForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            {this.renderShowPassword()}
            <LoginButton type="submit">Login</LoginButton>
            {showErrMsg && <LoginErrorMsg>*{errorMsg}</LoginErrorMsg>}
          </FormContainer>
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
