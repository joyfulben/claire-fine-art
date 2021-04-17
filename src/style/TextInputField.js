import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {SubmitButton} from './SubmitButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      borderRadius: '5px',
      transition: 'all 1s',
      '& :focus': {
        boxShadow: '1px 1px 5px black',
        transition: 'all 1s',
        backgroundColor: 'rgb(92, 246, 121)'
      }
    },
  },
}));

export default function TextFields({handleChange, body, title, setBody, setTitle}) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:benfishernow@gmail.com?subject=${title}&body=${body}`);
    setTitle('');
    setBody('');
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

      <TextField
      name="subject"
      onChange={handleChange}
      label="Subject"
      variant="filled"
      placeholder="Can I display your art?"
      value={title}
      />
      <TextField
      id="standard-textarea"
      onChange={handleChange}
      placeholder="Your work is mesmerizing!"
      name="body"
      label="Body"
      variant="filled"
      multiline
      rows={6}
      value={body}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
}
