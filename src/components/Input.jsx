import React from 'react';
import styled from 'styled-components';
//components
import Button from './Button';

const Wrapper = styled.form`
    position: fixed;
    top:${props => `${props.top}%`};
    left:50%;
    transform:translate(-50%, -50%);
    min-width:250px;
    min-height:50px;
    border-radius:3px;
    border-bottom:1px solid #d3d3d3;
    display:flex;
    justify-content:center;
    align-items:center;
    
    input{
        padding-left:5px;
        
    }
`;

const Input = (
    {
        inputValue = '',
        inputName = 'default',
        inputType = 'text',
        btnLabel,
        btbType,
        placeholder = '',
        top = '50',
        fhChange = () => { },
        fnSubmit = () => { }

    }) => {

    return(
       <Wrapper onSubmit={fnSubmit} top={top} name={inputName}>
           
               <input 
                    type={inputType}//'text'
                    name={inputName}//'position'
                    value={inputValue}
                    onChange={fhChange}
                    placeholder={placeholder} 
               />
               <Button
                    type={btbType}
                    text={btnLabel}
                />
       </Wrapper> 
    )
};
export default Input;