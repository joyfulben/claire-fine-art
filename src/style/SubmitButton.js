import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SubmitButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'rgba(49, 240, 97, 0.32)',
    '&:hover': {
      backgroundColor: 'rgba(49, 240, 97, 0.22)',
      borderColor: 'green',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(0, 215, 28, 0.67)',
      borderColor: 'green',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(111, 250, 163, 0.5)',
    },
  },
})(Button);

export {SubmitButton};
