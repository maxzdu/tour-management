import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
      imgUrl : weatherImg,
      title: "Calculer La Météo",
      desc: "Nous calculons la météo pour nous assurer que nos voyages commencent au meilleur temps de l'année"
    },
    {
      imgUrl : guideImg,
      title: "Meilleur Guide Touristique",
      desc: "nous travaillons actuellement avec les meilleurs guides de voyage dans chaque pays où nous envoyons nos clients"
    },
    {
      imgUrl : customizationImg,
      title: "Personnalisation",
      desc: "Nous personnalisons les voyages en fonction du nombre d'invités et de la durée"
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item,index)=> (
         <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item}/>
         </Col>   
     ))}
    </>
  )
}

export default ServiceList