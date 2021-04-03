import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Pieces} from './components/Pieces';
import {Contact} from './components/Contact';
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <div className="root-container">
    <Router>
    <nav className="header-container">
      <h1>Cool Logo</h1>
      <ul className="top-bar">
        <Button><Link to="/">Home</Link></Button>
        <Button><Link to="/pieces">Pieces</Link></Button>
        <Button><Link to="/contact">Contact</Link></Button>
      </ul>
    </nav>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pieces" exact component={Pieces} />
    <Route path="/contact" exact component={Contact} />
    </Switch>
    </Router>

    </div>
  );
}
