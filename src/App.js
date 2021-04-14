import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Pieces} from './components/Pieces';
import {Contact} from './components/Contact';
import {Modal} from './components/Modal';
import Button from '@material-ui/core/Button';
import {ArtRepo} from './style/assets/ArtRepo';
import Piece from './components/Piece';
import {SiteLogo} from './style/assets/Logo';
import Footer from './components/Footer';
import './style/header.css';

export default function App() {
  const [modal, showModal] = useState(false);
  const [children, setChildren] = useState([]);

  const seeModal = () => showModal(true);
  const closeModal = () => showModal(false);
  console.log(ArtRepo.encaustics);
  return (
    <div className="root-container">

    <Router>
    <nav className="header-container">
      <div className="logo-container">
        <a href="/"><img className="site-logo" src={SiteLogo.logo} alt="site logo"/></a>
        <img className="logo-background" src={SiteLogo.logoBackground} alt="logo background" />
      </div>
      <ul className="top-bar">
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/pieces"><Button>Pieces</Button></Link>
        <Link to="/contact"><Button>Contact</Button></Link>
      </ul>
    </nav>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pieces" exact component={() => (<Pieces setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.encaustics, ArtRepo.prints, ArtRepo.mixed]}/>)} />
    <Route path="/pieces/encaustics" exact component={() => (<Pieces setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.encaustics]} type="Encaustics"/>)} />
    <Route path="/pieces/prints" exact component={() => (<Pieces setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.prints]} type="Prints"/>)} />
    <Route path="/pieces/mixed" exact component={() => (<Pieces setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.mixed]} type="Mixed"/>)} />

    <Route path="/contact" exact component={Contact} />
    <Route path={`/:pieceId`} component={() => (<Piece data={children} />)} />

    </Switch>
    </Router>
    {
    modal && <Modal closeModal={() => closeModal()} show={modal}>
    {children}
    </Modal>
    }
    <footer>
     <Footer />
    </footer>
    </div>
  );
}
