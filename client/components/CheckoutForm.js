import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import {Container} from 'semantic-ui-react'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <Container className="checkout" textAlign="center">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </Container>
    )
  }
}

export default injectStripe(CheckoutForm)
