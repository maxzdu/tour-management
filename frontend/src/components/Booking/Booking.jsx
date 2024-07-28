import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import './booking.css';
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {toast} from 'react-toastify';
import {AuthContext} from '../../context/AuthContext';
import {BASE_URL} from '../../utils/config';


const Booking = ({tour,avgRating}) => {
  const {price,reviews,title} = tour;
  const navigate = useNavigate();
  
  const {user} = useContext(AuthContext);

  
  const [booking,setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title , 
    fullName: user && `${user.firstname } ${user.lastname}`,
    phone: user && user.phone,
    guestSize:1,
    bookStart:'',
    bookEnd:''

  });

  const handleChange = (e) => {
     setBooking(prev =>({...prev , [e.target.id]:e.target.value}))
  }

  const serviceFee = 2000;
  const totalAmount = Number(price) * Number(booking.guestSize)+ Number(serviceFee); 
  //send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking);
    try{
      if(! user || user === undefined || user === null){
        return toast.warning('Veuillez vous connecter',{
          position: toast.POSITION.TOP_CENTER});
      }
      const res = await fetch(`${BASE_URL}/booking`,{
        method:'post',
        headers:{
          'content-type': 'application/json'
        },
        credentials: 'include',
        body : JSON.stringify(booking)
      })
       
      const result = await res.json();

      if(!res.ok) {
        return toast.warning(result.message,{
          position: toast.POSITION.TOP_CENTER});
      }else{
      navigate("/thank-you");
      }
    }catch(err){
      toast.error(err.message,{
        position: toast.POSITION.TOP_CENTER});
    }
    
    navigate('/thank-you');
  }
  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
          <h3> {price} DA<span> /par personne</span></h3>
          <span className="tour__rating d-flex align-items-center ">
            <i class="ri-star-fill"></i> 
              {avgRating ===0 ? null : avgRating} ({reviews?.length}) 
           </span>
   
        </div>
        {/*=============== booking form start ============ */}
        <div className="booking__form">
            <h5> Les Informations personnelles</h5>
            <Form onSubmit={handleClick}>
              <FormGroup>
                <input type="text" placeholder='Nom et Prénom' id="fullName" value={booking.fullName} required onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder='Email' id="userEmail" value={booking.userEmail} required onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder='Téléphone' id="phone" value={booking.phone} required onChange={handleChange} />
              </FormGroup>
              <FormGroup className='d-flex align-items-center gap-3'>
                <input type="text" placeholder='Début de réservation' id="bookStart" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} required onChange={handleChange} />
                <input type="text" placeholder='Fin de réservation' id="bookEnd" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} required onChange={handleChange} />
              </FormGroup>
              <FormGroup className='d-flex align-items-center gap-3'>
                <input type="number" placeholder='Invités' id="guestSize" required onChange={handleChange} />
              </FormGroup>
            </Form>
        </div>
        {/*=============== booking form end  ============ */}

        {/*============ booking bottom =========== */}
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                   <h5 className='d-flex align-items-center gap-1'>
                    {price} DA <i class="ri-close-line"></i> 1 personne
                    </h5>
                   <span> {price} DA</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                   <h5>Frais de service</h5>
                   <span>2000.00 DA</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                   <h5>Total</h5>
                   <span> {totalAmount} DA </span>
                </ListGroupItem>
            </ListGroup>

            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Reserve Maintenant</Button>
        </div>
    </div>
  )
}

export default Booking;