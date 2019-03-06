// src/Exmples/NewTodo.js

import React, { useState } from 'react'

import { useAsyncEndpoint } from '../hooks/useEndpoint'

import { useStyles } from '../hooks/StyleHooks'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField
} from '@material-ui/core'

const todosApi = 'https://jsonplaceholder.typicode.com/todos'

function postTodoEndpoint () {
  /* eslint-disable react-hooks/rules-of-hooks */
  return useAsyncEndpoint(data => ({
    url: todosApi,
    method: 'POST',
    data
  }))
}

export default function NewTodo () {
  // use of hooks to bring classes style sheet in (usually done with HOC) and access the theme
  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [newTodo, postNewTodo] = postTodoEndpoint()

  function createTodo () {
    postNewTodo({
      title,
      body,
      userId: 1
    })
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <div>
          <TextField
            id='outlined-with-placeholder'
            label='Title'
            placeholder=''
            className={classes.textField}
            margin='normal'
            variant='outlined'
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id='outlined-textarea'
            label='Todo content'
            placeholder=''
            multiline
            rows='4'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            required
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          size='small'
          className={classes.button}
          onClick={createTodo}
        >
          New Todo
        </Button>
      </CardActions>
      <div className='new-todo'>
        {(newTodo.pending && 'Creating Todo...') ||
          (newTodo.complete &&
            `Todo with title ${newTodo.data.title} with body ${
              newTodo.data.body
            } created with ID ${newTodo.data.id}`)}
      </div>
    </Card>
  )
}
