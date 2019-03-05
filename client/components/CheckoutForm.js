import React, {Component} from 'react'

import {Button} from 'semantic-ui-react'

class CheckoutForm extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://checkout.stripe.com/checkout.js'
    script.className = 'stripe-button'
    script.dataset.key = 'pk_test_TYooMQauvdEDq54NiTphI7jx'
    script.dataset.amount = '999'
    script.dataset.name = 'Stripe.com'
    script.dataset.description = 'Widget'
    script.dataset.image =
      'https://stripe.com/img/documentation/checkout/marketplace.png'
    script.dataset.locale = 'auto'
    script.dataset.zipCode = 'true' // Note camelCase!
    let form = document.getElementById('THEFORM')
    form.appendChild(script)
  }
  render() {
    return <div id="THEFORM" />
  }
}

export default CheckoutForm
