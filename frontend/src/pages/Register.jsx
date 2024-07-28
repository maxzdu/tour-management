import React, { useContext, useState } from 'react';
import '../styles/register.css';
import { Container ,Row ,Col ,Form ,FormGroup,Button } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import registerImg from '../assets/images/register-green.jpg';
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../utils/config'

const Register = () => {

  const navigate = useNavigate();
  const [creadentials,setCreadentials] = useState({
     firstname:undefined,
     lastname:undefined,
     birthday: undefined,
     gender : 'Mâle',
     phone : undefined,
     persontype : 'Un Individu',
     email:undefined,
     password: undefined,
     confPassword: undefined
  });

  const {dispatch} = useContext(AuthContext);


  const handleChange = (e) => {
     setCreadentials(prev =>({...prev , [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if(creadentials.password !== creadentials.confPassword){
      toast.warning('le mot de passe et le mot de passe de confirmation ne correspondent pas',{
        position: toast.POSITION.TOP_CENTER});
    }else{  
      try{
     
        const res = await fetch(`${BASE_URL}/auth/register`,{
          method: 'post',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(creadentials)
        });

        const result = await res.json();

        if(!res.ok){
          toast.warning(result.message,{
            position: toast.POSITION.TOP_CENTER});
        }else{
        dispatch({type:'REGISTER_SUCCESS'});
        navigate('/login');
        }
      }catch(err){
        toast.error(err.message,{
          position: toast.POSITION.TOP_CENTER});   
      }
  }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='10' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
  
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                 <FormGroup>
                    <input type="text" placeholder='Prénom' required id='firstname'
                     onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="text" placeholder='Nom' required id='lastname'
                     onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                     <input type="text" placeholder='Anniversaire' id="birthday" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <select  id="gender" required onChange={handleChange} >
                        <option value="Mâle" selected>Mâle</option>
                        <option value="Femelle">Femelle</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email'
                     onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="text" placeholder='Téléphone' required id='phone'
                     onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <select  id="persontype"  required onChange={handleChange}>
                        <option value="Représentant de l'organisation" >Représentant de l'organisation</option>
                        <option value="Représentant du groupe" >Représentant du groupe</option>
                        <option value="Un Individu" selected >Un Individu</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Mot de passe' required id='password'
                     onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Confirmez le mot de passe' required id='confPassword'
                     onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' 
                  type='submit' >Créer Un Compte</Button>
                  <p>Vous avez déjà un compte? <Link to='/login'>S'identifier</Link></p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;