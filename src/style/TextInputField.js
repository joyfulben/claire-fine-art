import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {SubmitButton} from './SubmitButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      borderRadius: '5px',
      '& :focus': {
        boxShadow: '1px 1px 5px black',
        backgroundColor: 'rgb(0, 252, 252)'
      }
    },
  },
}));

export default function TextFields({handleChange, body, title}) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `mailto:benfishernow@gmail.com?subject=${title}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

      <TextField
      name="subject"
      onChange={handleChange}
      label="Subject"
      variant="filled"
      />
      <TextField
      id="standard-textarea"
      onChange={handleChange}
      name="body"
      label="Body"
      variant="filled"
      multiline
      rows={6}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
}
