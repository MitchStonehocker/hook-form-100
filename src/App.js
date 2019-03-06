// src/App.js
// Part 1) https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-1-7531849d8381
// Part 2) https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-2-3ab42ba6ad5c

import React from 'react'

import Todo from './Examples/Todo'
import NewTodo from './Examples/NewTodo'
import UsaStateSelector from './Examples/UsaStateSelector'

import './App.css'

function App () {
  return (
    <div>
      <header className='App-header'>header</header>
      <main className='App-main'>
        <Todo />
        <NewTodo />
        <UsaStateSelector />
      </main>
      <footer className='App-footer'>footer</footer>
    </div>
  )
}

export default App
