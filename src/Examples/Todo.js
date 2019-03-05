// src/Example/Todo.js

import React, { useState } from 'react'

import { useEndpoint } from '../hooks/useEndpoint'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../styles'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const todosApi = 'https://jsonplaceholder.typicode.com/todos'

function Todo (props) {
  const { classes } = props
  const bull = <span className={classes.bullet}>•</span>

  const [count, setCount] = useState(1)
  const todo = useEndpoint({
    method: 'GET',
    url: `${todosApi}/${count}`
  })

  //   console.log('>>>-Todo-count->', count)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          component='h2'
          variant='h5'
          color='textPrimary'
          gutterBottom
        >
          Todo {bull} {count}
        </Typography>

        <Typography component='p'>
          {(todo.pending && 'Loading...') || (todo.complete && todo.data.title)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          size='small'
          className={classes.button}
          onClick={() => setCount(count + 1)}
        >
          Next Todo
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Todo)
