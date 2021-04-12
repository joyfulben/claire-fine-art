import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Pieces} from './components/Pieces';
import {Contact} from './components/Contact';
import {Modal} from './components/Modal';
import Button from '@material-ui/core/Button';
import {ArtRepo} from './style/assets/ArtRepo';
import Piece from './components/Piece';
import {SiteLogo} from './style/assets/Logo';


export default function App() {
  const [modal, showModal] = useState(false);
  const [children, setChildren] = useState([]);

  const seeModal = () => showModal(true);
  const closeModal = () => showModal(false);


  return (
    <div className="root-container">

    <Router>
    <nav className="header-container">
      <img src={SiteLogo.logo} />
      <ul className="top-bar">
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/pieces"><Button>Pieces</Button></Link>
        <Link to="/contact"><Button>Contact</Button></Link>
      </ul>
    </nav>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pieces" exact component={() => (<Pieces setChildren={setChildren} seeModal={() => seeModal()}/>)} />
    <Route path="/contact" exact component={Contact} />
    <Route path={`/:pieceId`} component={() => (<Piece data={ArtRepo.mixed} />)} />
    </Switch>
    </Router>

    </div>
  );
}
