import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const styles = () => ({
  card: {
    height: 300,
    width: 225
  },
  innerCard: {
    width: 'auto'
  },
  media: {
    //maxWidth: 225,
    paddingTop: '0%'
  },
  text: {
    textAlign: 'center'
  }
})

class ProductCard extends Component {
  state = {
    elevation: 2
  }
  _onMouseOver = () => this.setState({elevation: 12})
  _onMouseOut = () => this.setState({elevation: 2})

  render() {
    const {classes, product} = this.props

    return (
      <Grid item xs={4}>
        <Grid container justify="center">
          <Card
            className={classes.card}
            elevation={this.state.elevation}
            onMouseOver={this._onMouseOver}
            onMouseOut={this._onMouseOut}
          >
            <CardContent className={classes.innerCard}>
              <CardMedia
                component="img"
                height="100"
                image={product.imgUrl}
                className={classes.media}
              />
              <CardContent>
                <Typography component="h1" className={classes.text}>
                  {product.name}
                </Typography>
                <Typography component="h3" className={classes.text}>
                  {product.price}
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ProductCard)
