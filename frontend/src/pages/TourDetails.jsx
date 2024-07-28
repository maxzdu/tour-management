import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css';
import { Container,Row ,Col,Form,ListGroup } from 'reactstrap';
import {AiFillStar ,AiOutlineStar} from 'react-icons/ai'
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import calculateAvgRating from './../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from './../context/AuthContext';




const TourDetails = () => {

  const {id} = useParams();
  const reviewsMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const {user} = useContext(AuthContext); 
  // fetch data from database
  const {data:tour, loading , error} = useFetch(`${BASE_URL}/tours/${id}`);

  const {photo,title,desc,price , address ,reviews,city,distance,maxGroupSize} = tour;

  const {totalRating , avgRating} = calculateAvgRating(reviews);

  // format data
  const options = {day:'numeric',month:'long',year:'numeric'}

  // submit request to the server

  const submitHandler = async e =>{
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
     
    try{
      if(!user || user === undefined || user ===null){
        toast.warning('Veuillez vous connecter',{
          position: toast.POSITION.TOP_CENTER});
      }
      
      const reviewObj = {
        username : user?.firstname+user?.lastname ,
        reviewText ,
        rating: tourRating
      }

   
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        credentials:'include' ,
        body: JSON.stringify(reviewObj)
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

  useEffect(()=> {
    window.scrollTo(0,0);
  },[tour]);
  return (
    <>
    <section>
      <Container>
       { loading && <h4 className='text-center pt-5'>Chargement...........</h4>}
       { error && <h4 className='text-center pt-5'>{error}</h4>}
       {
        !loading && !error &&  <Row>
        <Col lg="8">
          <div className="tour__content">
            <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
                <span className="tour__rating d-flex align-items-center gap-1" >
                  <i class="ri-star-fill" style={{color:'#f2cc33'}}></i> 
                  {avgRating ===0 ? null : avgRating}
                  {totalRating ===0 ? (
                    "Pas révisé"
                  ):(
                    <span>({reviews?.length})</span>
                  )}
                </span>
                 
                <span>
                  <i class="ri-map-pin-user-fill"></i> {address}
                </span>
              </div>
              <div className="tour__extra-details">
                <span>
                  <i class="ri-map-pin-2-line"></i> {city}
                </span>
                <span>
                  <i class="ri-money-dollar-circle-line"></i> {price} DA /par personne
                </span>
                <span>
                  <i class="ri-map-pin-time-line"></i> {distance} k/m
                </span>
                <span>
                  <i class="ri-group-line"></i> {maxGroupSize} personnes
                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p> 
            </div>

            {/* ================= tour reviews section start =============== */}
             <div className="tour__reviews mt-4">
              <h4>Commentaires ({reviews?.length})</h4>

              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {Array(5)
                  .fill()
                  .map((_, index) =>
                    tourRating >= index + 1 || hoverStar >= index + 1 ? (
                      <AiFillStar
                        onMouseOver={() => !tourRating && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: '#f2cc33' }}
                        onClick={() => setTourRating(index + 1)}
                      />
                    ) : (
                      <AiOutlineStar
                        onMouseOver={() => !tourRating && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        style={{ color: '#f2cc33' }}
                        onClick={() => setTourRating(index + 1)}
                      />
                    )
                  )}
                </div>

                <div className="review__input">
                  <input type="text" required ref={reviewsMsgRef} placeholder='Partage tes pensées' />
                  <button  className='btn primary__btn text-white' type='submit' >
                   Soumettre
                  </button>
                </div>
              </Form>
              <ListGroup className='user__reviews'>
                {
                  reviews?.map(review =>(
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.username}</h5>
                            <p>
                              {new Date(review.createdAt).toLocaleDateString("en-US",options)}
                            </p>
                          </div>
                          <span className='d-flex align-items-center'>
                              {review.rating} 
                            <i class="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
             </div>
            {/* ================= tour reviews section start =============== */}
          </div>
        </Col>
        <Col lg='4'>
          <Booking tour={tour} avgRating={avgRating} />
        </Col>
      </Row>
       }
      </Container>
    </section>
    <Newsletter />
    </>
  )
}

export default TourDetails;