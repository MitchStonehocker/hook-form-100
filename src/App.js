// src/App.js
// Part 1) https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-1-7531849d8381
// Part 2) https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-2-3ab42ba6ad5c

import React from 'react'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import Todo from './Examples/Todo'
import NewTodo from './Examples/NewTodo'
import UsaStateSelector from './Examples/UsaStateSelector'

import './App.css'

// create our material ui theme using up to date typography variables
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header className='App-header'>header</header>
        <main className='App-main'>
          <Todo />
          <NewTodo />
          <UsaStateSelector />
        </main>
        <footer className='App-footer'>footer</footer>
      </div>
    </ThemeProvider>
  )
}

export default App
