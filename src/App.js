import React, {useState} from 'react';
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

const styles = {

  main: {
    background: 'rgba(20, 20, 20, 0.83)',
  },
  detailsButton: {
    background: 'rgba(24, 66, 27, 0.75)',
    color: 'rgb(88, 148, 251)'
  }
}

export default function App() {
  const [modal, showModal] = useState(false);
  // In this case children are the individual (piece)s are being .push()ed from ArtRepo depending on what path with root /pieces the user is being routed to.
  const [children, setChildren] = useState([]);
  const seeModal = () => showModal(true);
  const closeModal = () => showModal(false);

  return (
    <div className="root-container">

    <Router>
    <nav className="header-container">
    {// logo-container has logo pic from exported from SiteLogo
    }
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
    <Route path="/pieces" exact component={() => (<Pieces  styles={styles} setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.encaustics, ArtRepo.prints, ArtRepo.mixed]}/>)} />
    <Route path="/pieces/encaustics" exact component={() => (<Pieces styles={styles} setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.encaustics]} type="Encaustics"/>)} />
    <Route path="/pieces/prints" exact component={() => (<Pieces styles={styles} setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.prints]} type="Prints"/>)} />
    <Route path="/pieces/mixed" exact component={() => (<Pieces styles={styles} setChildren={setChildren} seeModal={() => seeModal()} childData={[ArtRepo.mixed]} type="Mixed"/>)} />

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
     <Footer siteLogo={SiteLogo}/>
    </footer>
    </div>
  );
}
export {styles};
