import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import {me} from './store'

const mapState = ({userReducer}) => ({isLoggedIn: !!userReducer.id})

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}
export default withRouter(
  connect(mapState, mapDispatch)(
    class App extends Component {
      componentDidMount() {
        console.log('APPmount', new Date())
        this.props.loadInitialData()
      }
      render() {
        console.log('APPRender', new Date())
        const {isLoggedIn} = this.props
        return (
          <div id="appContainer">
            <Navbar isLoggedIn={isLoggedIn} />
            <Routes isLoggedIn={isLoggedIn} />
          </div>
        )
      }
    }
  )
)
