import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const DetailButton = withStyles({
  root: {
    background: 'rgba(103, 246, 118, 0.69)',
    borderRadius: 3,
    border: 0,
    height: '50px',
    width: '50%',
    margin: '0 25%',
    color: 'white',
    fontSize: '25px',
    fontFamily: 'Acme',
    boxShadow: '0 0 10px black',
    '&:hover': {
        backgroundColor: 'rgba(100, 224, 236, 0.7)',
        boxShadow: '0 0 3px black',
      },
  },
  label: {
    textTransform: 'capitalize',
  },

})(Button);

export default DetailButton;
