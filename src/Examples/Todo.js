// src/Example/Todo.js

import React, { useState } from 'react'

import { useEndpoint } from '../hooks/useEndpoint'

import { useStyles } from '../hooks/StyleHooks'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'

const todosApi = 'https://jsonplaceholder.typicode.com/todos'

export default function Todo () {
  // use of hooks to bring classes style sheet in (usually done with HOC) and access the theme
  const classes = useStyles()

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
