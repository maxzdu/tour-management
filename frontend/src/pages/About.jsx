import React from 'react';
import '../styles/about.css';
import galleryImg01 from '../assets/images/gallery-03.jpg';

const About = () => {
  return (
    <>
    <div className='heading'>
        <h1>Description Du Projet</h1>
        <p>The most important part of the online travel agency project is its database.
           The database is full of Buses, Trains , Airplane timings and availability.Online
          travel agency is a web based project where a user may search and apply for a travel
          service or package. The system allows the user to check various travel destinations
           and choose his destination accordingly. The software system checks for user choice 
           and then queries the database for various available mediums to travel to that destination.
           The system then loads all that data and puts those choices in front of the user. The user
           can now choose various ways to reach his destination. When the user chooses the Bus, train
           or Airplane option, the system also allows the user to book tickets to the destination for
          the desire day and timings. Thus this software system automates the working of a travel agency
           and allows users to check and book his holidays online through this website.
           One more important functionality available in this project if needed is that the receipt of
            holiday booking is sen t to the users mobile phone on successful booking of his holiday. 
            This feature is optional and can be provided in the project if nee</p>
    </div>
    <div className="container">
        <section className="about">
            <div className="about-image">
              <img src={galleryImg01} alt="about-image" />
            </div>
            <div className="about-content">
                <h2>Les Points Essentiels Du Projet:</h2>
                <p>The most important part of the online travel agency project is its database.
                   The database is full of Buses, Trains , Airplane timings and availability.
                  Online travel agency is a web based project where a user may search and apply for a 
                  travel service or package. The system allows the user to check various travel destinations and 
                  choose his destination accordingly. The software system checks for user choice and then queries the 
                  database for various available mediums to travel to that destination. The system then loads all 
                  that data and puts those choices in front of the user. The user can now choose various 
                  ways to reach his destination. When the user chooses the Bus, train or Airplane option, the system 
                  also allows the user to book tickets to the destination for the desire day and timings. Thus this 
                  software system automates the working of a travel agency and allows users to check and book his holidays 
                  online through this website. One more important functionality available in this project if needed is that
                  the receipt of holiday booking is sen t to the users mobile phone on successful booking of his holiday. 
                  This feature is optional and can be provided in the project if nee</p>
                  {/* ajouter <br /> pour une nouvelle ligne */}
            </div>
        </section>
    </div>
    </>
  )
}

export default About;