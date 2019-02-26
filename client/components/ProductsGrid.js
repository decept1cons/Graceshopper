import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = () => ({
  paper: {
    height: 140,
    width: 100
  }
})

class ProductsGrid extends Component {
  render() {
    const {classes} = this.props

    return (
      <Grid container spacing={16} justify="center">
        <Grid item lg={3}>
          <Paper className={classes.paper}>
            <Typography component="h3">This is a product</Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper}>
            <Typography component="h3">This is a product</Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper}>
            <Typography component="h3">This is a product</Typography>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ProductsGrid)
