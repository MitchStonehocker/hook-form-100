// src/Exmples/NewTodo.js

import React, { useState } from 'react'

import { useAsyncEndpoint } from '../hooks/useEndpoint'

import { withStyles } from '@material-ui/core/styles'
import { styles } from '../styles'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const todosApi = 'https://jsonplaceholder.typicode.com/todos'

function postTodoEndpoint () {
  /* eslint-disable react-hooks/rules-of-hooks */
  return useAsyncEndpoint(data => ({
    url: todosApi,
    method: 'POST',
    data
  }))
}

function NewTodo (props) {
  const { classes } = props
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
            placeholder='Placeholder'
            className={classes.textField}
            margin='normal'
            variant='outlined'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id='outlined-textarea'
            label='Todo content'
            placeholder='Placeholder'
            multiline
            rows='4'
            className={classes.textField}
            margin='normal'
            variant='outlined'
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

export default withStyles(styles)(NewTodo)
