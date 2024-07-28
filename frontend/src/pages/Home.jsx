import React from 'react';
import '../styles/home.css';

import {Container, Row , Col} from 'reactstrap';
import Subtitle from './../shared/Subtitle';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo  from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/pngwing.com.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Savoir Avant De Partir'} />
                  <img src={worldImg} alt="World" />
                </div>
                <h1>Le voyage ouvre la porte à la création de nouveaux <span className="highlight"> souvenirs</span></h1>
                <p>
                travel dz propose les meilleurs voyages à travers le monde, vous pouvez visiter les plus 
                beaux endroits du monde au bon moment, notre site Web vous permet 
                de découvrir tous les voyages que nous proposons avec des informations détaillées, 
                et vous pouvez facilement réserver les voyages que vous souhaitez en quelques minutes
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========= hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>Ce que nous servons</h5>
              <h2 className='services__title'>Nous offrons nos meilleurs services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========== featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explorer"} />
             <h2 className='featured__tour-title'>Nos voyages populaires</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========== featured tour section end ============  */}

      {/* ========== experience section start ===========   */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="exprience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>Avec toute notre expérience <br /> nous vous servirons</h2>
                <p>les meilleurs voyages à travers le monde que vous pouvez 
                  <br />
                  trouver dans une agence de voyage algérienne.</p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>voyages réussis</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Clients réguliers</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Années d'expérience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
               <div className="experience__img">
                <img src={experienceImg} alt="experience" />
               </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== experience section end  */}

      {/* ============= gallery section start    =========== */}
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={'Galerie'} />
                <h2 className='gallery__title'>Visitez la galerie de visites de nos clients</h2>
              </Col>
              <Col lg='12'>
                <MasonryImagesGallery />      
              </Col>
            </Row>
          </Container>

        </section>
      {/* ============= gallery section end ========== */}

      {/* ============= testimonial section start ========== */}
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={'Les fans adorent'} />
                <h2 className="testimonial__title">Ce que nos fans disent de nous</h2>
              </Col>
              <Col lg='12'>
                <Testimonials />
              </Col>
            </Row>
          </Container>
        </section>
        {/* ============= testimonial section end ========== */}
        <Newsletter />
    </>
  )
}

export default Home;