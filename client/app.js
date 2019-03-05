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
      state = {
        time: 0
      }
      componentDidMount() {
        console.log('APPmount', new Date())
        this.props.loadInitialData()
        this.interval = setInterval(
          () => this.setState({time: Date.now()}),
          1000
        )
      }

      componentWillUnmount() {
        clearInterval(this.interval)
      }

      render() {
        const {isLoggedIn} = this.props
        return (
          <div id="appContainer">
            <Navbar isLoggedIn={isLoggedIn} time={this.state.time} />
            <Routes isLoggedIn={isLoggedIn} />
          </div>
        )
      }
    }
  )
)
