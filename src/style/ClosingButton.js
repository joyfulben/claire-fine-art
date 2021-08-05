import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const ClosingButton = withStyles({
  root: {
    background: 'rgba(59, 37, 50, 0.75)',
    borderRadius: 3,
    border: 0,
    height: '60px',
    width: '100vw',
    color: 'red',
    fontSize: '30px',
    '&:hover': {
      cursor: 'pointer',
      background: 'rgb(0, 0, 0)',
      color: 'red'
    }
  }
}) (Button);

export default ClosingButton;
