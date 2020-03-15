import React, { useState } from 'react';
import styled from 'styled-components';
import { geoFindMe } from '../helpers/geo';
import axios from 'axios';
//components
import Button from './Button'

const Wrapper = styled.div`
    position: fixed;
    top:5%;
    left:50%;
    transform:translate(-50%, -50%);
    min-width:250px;
    min-height:30px;
    padding: 0 5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    input{
        cursor:pointer;
    }
`;


const Geolocation = (
    {
        checked = false,
        fhChange = () => { },

    }) => {

        const [location, setLocation ] = useState('Determine my position');

        const URL ='www.metaweather.com/api/location/search/?lattlong=';
        const testCoordinates = '36.96,-122.02';
        // 36.96,-122.02
        //50.7403341,31.0297808

        const getMyLocation = async () => {
            const result = await geoFindMe();
            setLocation(result);
            console.log('test Url', `${URL}${testCoordinates}`);
            const testApi = await axios.get(`${URL}${testCoordinates}`);
            console.log(testApi);
        }

    return(
<Wrapper>
    <p>{location}</p>
    <Button
        type='button'
        text='Request'
        fnClick={getMyLocation}
    />
         
    
</Wrapper>
    )
};

export default Geolocation;