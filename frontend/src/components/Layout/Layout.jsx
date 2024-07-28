import React from 'react'
import Header from './../Header/Header';
import Router from '../../router/Router';
import Footer from './../Footer/Footer';
import {ToastContainer} from 'react-toastify';

const Layout = () => {
  return(
  <>
   <ToastContainer ></ToastContainer>
   <Header />
   <Router />
   <Footer />
  </>)
    
}

export default Layout;