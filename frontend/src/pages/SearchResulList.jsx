import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection';
import {Container , Row ,Col} from 'reactstrap';
import {useLocation} from "react-router-dom";
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter';

const SearchResulList = () => {

  const location = useLocation();
  const [data] = useState(location.state);
  
  console.log(data);

  return (
    <>
      <CommonSection title={"Résultat de la recherche de voyage"} />
         <section>
          <Container>
            <Row>
              {
                data.length === 0 || data[0] == null ? (<h4 className='text-center'>Aucun voyage trouvé</h4> ): (data?.map(tour=> (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>)) 
              )}
            </Row>
          </Container>
         </section>
         <Newsletter />
    </>
  )
}

export default SearchResulList;