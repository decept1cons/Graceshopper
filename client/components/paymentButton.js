import React, {Component} from 'react'
import ls from 'local-storage'
export class PaymentButton extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://checkout.stripe.com/checkout.js'
    script.className = 'stripe-button'
    script.dataset.key = 'pk_test_G2RJFwB910TtMxLwmOvumISO'
    script.dataset.amount = this.props.amount * 100
    script.dataset.name = 'Decepticons'
    script.dataset.description = 'Buying Whips'
    script.dataset.image =
      'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png'
    script.dataset.locale = 'auto'
    script.dataset.zipCode = 'true' // Note camelCase!
    let form = document.getElementById('THEFORM')
    ls.remove('lsid')
    form.appendChild(script)
  }
  render() {
    ls.remove('lsid')
    return (
      <form
        id="THEFORM"
        method="post"
        action="/paymentsuccess"
        onSubmit={event => event.preventDefault()}
      />
    )
  }
}
