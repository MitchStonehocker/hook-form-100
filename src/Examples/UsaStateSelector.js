// src/Example/UsaStateSelector.js

import React, { useState } from 'react'
import { usaStates } from './refLists'

import {
  Card,
  CardContent,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormHelperText
} from '@material-ui/core'

// import { withStyles } from '@material-ui/core/styles'
// import { styles } from '../styles'

export default function UsaStateSelector (props) {
  // const { classes } = props
  const [usaState, setUsaState] = useState('')

  function handleChange (event) {
    setUsaState(event.target.value)
  }

  console.log('>>>-UsaStateSelector-usaStates->', usaStates)

  return (
    <Card>
      <CardContent>
        <form>
          <FormControl variant='outlined' required>
            <InputLabel htmlFor='outlined-usaState-simple'>State</InputLabel>
            <Select
              value={usaState}
              onChange={handleChange}
              input={
                <OutlinedInput
                  labelWidth={75}
                  name='usState'
                  id='outlined-usState-simple'
                />
              }
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {usaStates.map(state => (
                <MenuItem key={state.code} value={state.code}>
                  {state.name}
                </MenuItem>
              ))}

              {/* <MenuItem value={'CA'}>CA</MenuItem>
              <MenuItem value={'NY'}>NY</MenuItem>
              <MenuItem value={'WI'}>WI</MenuItem> */}
            </Select>
            <FormHelperText>* Required</FormHelperText>
          </FormControl>
        </form>
      </CardContent>
      {usaState}
    </Card>
  )
}
