import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    min-width:250px;
    min-height:50px;
    background-color:pink;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const YourLocation = (
    {
        location = 'Default',
        temperature = '__℃'
    }) => {

        return (
            <Wrapper>
                <h4>{location}</h4>
                <p>{temperature}</p>
            </Wrapper>
        )

};

export default YourLocation;