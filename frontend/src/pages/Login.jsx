import React, { useState,useContext } from 'react';
import '../styles/login.css';
import { Container ,Row ,Col ,Form ,FormGroup,Button } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import loginImg from '../assets/images/app-login-5948720-4922487.png';
import userIcon from '../assets/images/user-green.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Login = () => {

  const [creadentials,setCreadentials] = useState({
    email:undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
     setCreadentials(prev =>({...prev , [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    
    dispatch({type:'LOGIN_START'});

    try{
       const res = await fetch(`${BASE_URL}/auth/login`,{
        method: "post",
        headers: {
          "content-type":"application/json",
        },
        creadentials:'include',
        body: JSON.stringify(creadentials),
       });

       const result = await res.json();
       if(!res.ok) {
         toast.warning(result.message,{
          position: toast.POSITION.TOP_CENTER});
       }else{      
       dispatch({type:'LOGIN_SUCCESS',payload: result.data});
       navigate('/');
       }
    }catch(err){
      toast.error(err.message,{
        position: toast.POSITION.TOP_CENTER});
       dispatch({type:'LOGIN_FAILURE',payload:err.message});
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email'
                     onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Mot de passe' required id='password'
                     onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' 
                  type='submit'>S'identifier</Button>
                  <p>Vous n'avez pas de compte ? <Link to='/register'>Créer</Link></p>
                </Form>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;