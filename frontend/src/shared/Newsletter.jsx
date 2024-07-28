import React, { useRef } from 'react'
import './newsletter.css';
import { BASE_URL } from '../utils/config';
import {Container , Row , Col} from 'reactstrap';
import {toast} from 'react-toastify';
import maleTourist from '../assets/images/male-tourist.png';


const Newsletter = () => {
   const emailRef = useRef('');
   
  const handleClick = async (e) =>{
    e.preventDefault();
    
    const email = emailRef.current.value;

    try{
      const res = await fetch(`${BASE_URL}/subscribe`,{
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({email})
      });
      
       const result = await res.json();
       if(!res.ok){
         return toast.warning(result.message,{
          position: toast.POSITION.TOP_CENTER});
       }else{
       toast.success(result.message,{
        position: toast.POSITION.TOP_CENTER});
       window.location.reload(false)}
    }catch(err){
       toast.error(err.message,{
        position: toast.POSITION.TOP_CENTER});
    }
  }
  return (
    <section className='newsletter'>
        <Container >
            <Row>
                <Col lg='6' >
                    <div className="newsletter__content">
                        <form onSubmit={handleClick}>
                        <h2>Abonnez-vous maintenant pour obtenir des informations utiles sur les voyages.</h2>
                        <div className="newsletter__input">
                           <input type="email"  placeholder='Entrer votre Email' ref={emailRef} />
                           <button className="btn newsletter__btn" type='submit'>S'abonner</button> 
                        </div>
                       </form>
                        <p>Nous vous enverrons nos offres, afin que vous puissiez 
                          rester à jour en entrant simplement votre e-mail</p>
                    </div>
                </Col>
                <Col lg='6'>
                  <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                  </div>
                </Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default Newsletter;