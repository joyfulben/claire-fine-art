import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      borderRadius: '5px',
      '& :focus': {
        boxShadow: '1px 1px 5px black',
        backgroundColor: 'rgb(0, 252, 252)'
      }
    },
  },
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField
      name="subject"

      label="Subject"
      variant="filled"
      />
      <TextField
      id="standard-textarea"
      name="subject"
      label="Body"
      variant="filled"
      multiline
      rows={6}
      />
    </form>
  );
}
