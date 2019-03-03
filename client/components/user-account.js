import React, {Component} from 'react'
import {Card, Icon, Image, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class UserAccount extends Component {
  render() {
    // console.log(this.props.user)
    return (
      <div>
        <Container textAlign="center">Welcome back!!!</Container>
        <Card size="medium" centered>
          <Image src={this.props.user.imageUrl} />
          <Card.Content>
            <Card.Header>{this.props.user.email}</Card.Header>
            <Card.Meta>
              <span className="date">
                Joined in {this.props.user.createdAt.slice(0, 4)}
              </span>
            </Card.Meta>
            <Card.Description>
              <Link to="/">Update Information</Link>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              You have 0 item(s) in cart.
            </a>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
const mapState = ({userReducer}) => {
  return {
    user: userReducer
  }
}
export default connect(mapState)(UserAccount)
