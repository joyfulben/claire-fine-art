import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const BuyButton = withStyles({
  root: {
    background: 'rgb(23, 163, 6)',
    borderRadius: 3,
    border: 0,
    height: '35px',
    fontWeight: 800,
    marginTop: '-6px',
    width: '15vw',
    color: 'rgba(251, 249, 15, 0.72)',
    fontSize: '18px',
    transition: 'all 500ms',
    border: '2px solid rgb(0, 98, 27)',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
      color: 'rgb(0,98,27)',
      background: 'rgba(251, 249, 15, 0.72)'
    }
  }
}) (Button);

export default BuyButton;
