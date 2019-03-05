import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import {auth} from '../store'
import {Form, Input, Button, Container, Divider, Icon} from 'semantic-ui-react'
import {withToastManager} from 'react-toast-notifications'
const AuthForm = ({name, displayName, handleSubmit, error, toastManager}) => (
  <Container textAlign="center">
    <Form onSubmit={handleSubmit} name={name}>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="email"
          placeholder="email"
          name="email"
          type="name"
        />
        <Form.Field
          id="form-input-control-password"
          control={Input}
          label="password"
          placeholder="password"
          name="password"
          type="password"
        />
      </Form.Group>
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
      />
      {error && error.response && error.response.data}
    </Form>
    <Divider />
    <Link to="/guestHome">
      <Button>Continue as Guest</Button>
    </Link>
    <Button
      method="get"
      action="/auth/google"
      color="google plus"
      href="/auth/google"
    >
      <Icon name="google plus" /> Login with Google
    </Button>
    <Button
      color="facebook"
      method="get"
      action="/auth/facebook"
      href="/auth/facebook"
    >
      <Icon name="facebook" /> Facebook
    </Button>
  </Container>
)
const mapLogin = ({userReducer}) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: userReducer.error
  }
}

const mapSignup = ({userReducer}) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: userReducer.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = withRouter(
  connect(mapLogin, mapDispatch)(withToastManager(AuthForm))
)
export const Signup = withRouter(
  connect(mapSignup, mapDispatch)(withToastManager(AuthForm))
)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
