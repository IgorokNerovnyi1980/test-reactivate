import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    position: fixed;
    bottom:5%;
    left:50%;
    transform:translate(-50%, -50%);
    min-width:250px;
    min-height:30px;
`;

const Input = styled.input`
appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3; 
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s; 
    transition: opacity .2s;
    :hover{
        opacity:1
    }
    ::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    background: blue; 
    cursor: pointer; 
}
`;


const Slider = (
    {
        value = 5,
        fnInput = () => { }
    }) => {

    return(
        <Wrapper>
            <Input
               type='range'
               min='1'
               max='765'
               step='1'
               name='slider'
               value={value}
               onInput={fnInput}
            />
        </Wrapper>
    )
};

export default Slider;