import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const FooterButton = withStyles({
  root: {
    background: 'rgba(103, 246, 118, 0.69)',
    borderRadius: 3,
    border: 0,
    height: '50px',
    width: '200px',
    margin: '20px 0',
    color: 'purple',
    fontSize: '25px',
    fontFamily: 'Acme',
    boxShadow: '0 0 10px black',
    '&:hover': {
        boxShadow: '0 0 3px black',
      },
  },
  label: {
    textTransform: 'capitalize',
  },

})(Button);

export default FooterButton;
