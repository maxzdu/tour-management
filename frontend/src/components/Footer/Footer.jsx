import React from 'react';
import './footer.css';
import {Container , Row ,Col ,ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from "../../assets/images/Travel.png";


const quick__links = [
  {
    path:'/home',
    display:'Accueil'
  },
  {
    path:'/about',
    display:'Â propos'
  },
  {
    path:'/tours',
    display:'Voyages'
  },
];
const quick__links2 = [
  {
    path:'/home',
    display:'Galerie'
  },
  {
    path:'/login',
    display: "S'identifier"
  },
  {
    path:'/register',
    display:"S'inscrire"
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
     <Container>
        <Row>
           <Col lg='3'>
             <div className="logo">
              <img src={logo} alt="" />
              <p>découvrez le monde avec les meilleurs voyages proposés par dz travel</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-whatsapp-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
             </div>
           </Col>
           <Col lg='3'>
             <h5 className='footer__links-title'>Découvrir</h5>
              
             <ListGroup className='footer__quick-links'>
                {
                  quick__links.map((item,index) => (
                    <ListGroupItem key={index} className='ps-0 border-0' >
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
             </ListGroup>
                              
           </Col>
           <Col lg='3'>
             <h5 className='footer__links-title'>Liens Rapides</h5>
              
             <ListGroup className='footer__quick-links'>
                {
                  quick__links2.map((item,index) => (
                    <ListGroupItem key={index} className='ps-0 border-0' >
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
             </ListGroup>
                              
           </Col>
           <Col lg='3'>
             <h5 className='footer__links-title'>Découvrir</h5>
              
             <ListGroup className='footer__quick-links'>
               
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' >
                      <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><i class='ri-map-pin-line'></i></span>
                        Address:
                      </h6>

                      <p className='mb-0'>Constantine, Algérie</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' >
                      <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><i class='ri-mail-line'></i></span>
                        Email:
                      </h6>

                      <p className='mb-0'>nticdeveloper@gmail.com</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' >
                      <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><i class='ri-phone-fill'></i></span>
                        Téléphone:
                      </h6>

                      <p className='mb-0'>+213558998844</p>
                    </ListGroupItem>
             </ListGroup>
                              
           </Col>
           <Col lg="12">
             <p className='copyright'>
              Copyright {year}, conçu et développé par NTIC. Tous les droits sont réservés.
             </p>
           </Col>
        </Row>
     </Container>
    </footer>
  )
}

export default Footer;