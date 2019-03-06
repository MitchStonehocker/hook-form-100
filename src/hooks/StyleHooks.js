// src/hooks/StyleHooks.js

import { makeStyles } from '@material-ui/styles'

// create a hook for classes objects
export const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: '250px',
      //   maxWidth: '450px',
      height: '100vh'
    },

    paper: {
      padding: theme.spacing.unit * 3
    },
    card: {
      minWidth: 100,
      maxWidth: 250,
      margin: theme.spacing.unit
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: 'none',
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    },
    form: {
      marginTop: theme.spacing.unit * 1
    },
    select: {
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    },
    formControl: {
      margin: '1px',
      width: '100px',
      marginTop: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1
    },
    selectEmpty: {
      marginTop: '1px'
    }
  }),
  { withTheme: true }
)
