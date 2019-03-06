// src/Example/UsaStateSelector.js

import React, { useState } from 'react'
import { usaStates } from './refLists'

import { useStyles } from '../hooks/StyleHooks'
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

export default function UsaStateSelector () {
  // use of hooks to bring classes style sheet in (usually done with HOC) and access the theme
  const classes = useStyles()
  const [usaState, setUsaState] = useState('')

  function handleChange (event) {
    setUsaState(event.target.value)
  }

  // console.log('>>>-UsaStateSelector-usaStates->', usaStates)

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.form}>
          <FormControl
            variant='outlined'
            required
            className={classes.formControl}
          >
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
            </Select>
            <FormHelperText>* Required</FormHelperText>
          </FormControl>
        </form>
      </CardContent>
      {usaState}
    </Card>
  )
}
