import React, { useRef } from 'react';
import './search-bar.css';
import {Col , Form , FormGroup} from 'reactstrap';
import {BASE_URL} from './../utils/config';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

    const locationRef = useRef('');
    // const distanceRef = useRef(0);
    const startDateRef = useRef(new Date());
    const endDateRef = useRef(new Date());
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;

        // const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location === '' || startDate==='' || endDate === '' ||  maxGroupSize === ''){
            return alert('All fields are required!');
        }
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&tourStart=${startDate}&tourEnd=${endDate}&maxGroupSize=${maxGroupSize}`);

        if(!res.ok) alert('Something went wrong');

        const result = await res.json();

        navigate(`/tours/search?city=${location}&tourStart=${startDate}&tourEnd=${endDate}&maxGroupSize=${maxGroupSize}`,
         {state:result.data});
    }
  return (
    <Col lg='12'>
        <div className="search__bar">
           <Form className='d-flex align-items-center gap-4'>
              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class='ri-map-pin-line'></i></span>
                <div>
                    <h6>Emplacement</h6>
                    <input type="text" placeholder='où vas-tu?' ref={locationRef} />
                </div>
              </FormGroup>

              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-calendar-line"></i></span>
                <div>
                    <h6>Date de début</h6>
                    <input type="date" placeholder='Start Date' ref={startDateRef} />
                </div>
              </FormGroup>
              <FormGroup className='d-flex gap-3 form__group form__group-fast '>
                <span><i class="ri-calendar-fill"></i></span>
                <div>
                    <h6>Date de fin</h6>
                    <input type="date" placeholder='End date' ref={endDateRef} />
                </div>
              </FormGroup>
              {/* <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class='ri-map-pin-line'></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                </div>
              </FormGroup> */}
              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class='ri-group-line'></i></span>
                <div>
                    <h6>Nombre de personnes</h6>
                    <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                </div>
              </FormGroup>

              <span className='search__icon' type='submit' onClick={searchHandler}>
                 <i className='ri-search-line'></i>
              </span>
           </Form>
        </div>
    </Col>
  )
}

export default SearchBar;