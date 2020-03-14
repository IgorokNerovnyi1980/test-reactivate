import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top:5%;
    left:50%;
    transform:translate(-50%, -50%);
    min-width:200px;
    min-height:30px;
    background-color:green;
    display:flex;
    justify-content:space-around;
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
        console.log(checked, typeof(checked))

    return(
<Wrapper>
    <p>Determine my position</p>
    <input 
        type='checkbox'
        name='myGeolocation'
        checked={Boolean(checked)}
        onChange={fhChange}
    />
</Wrapper>
    )
};

export default Geolocation;