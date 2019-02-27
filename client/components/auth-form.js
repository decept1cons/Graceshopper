import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {auth} from '../store'
import {Form, Input, Button, Container, Divider} from 'semantic-ui-react'

/**
 * COMPONENT
 */
const AuthForm = ({name, displayName, handleSubmit, error}) => (
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
          id="form-input-control-name"
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
      {error && error.response && <div> {error.response.data} </div>}
    </Form>
    <Divider />
    <a href="/auth/google">{displayName} with Google</a>
  </Container>
)

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
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

export const Login = withRouter(connect(mapLogin, mapDispatch)(AuthForm))
export const Signup = withRouter(connect(mapSignup, mapDispatch)(AuthForm))

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
