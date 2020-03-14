import React from 'react';
import styled from 'styled-components';
//components
import Button from './Button';

const Wrapper = styled.form`
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    min-width:250px;
    min-height:50px;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    input{
        padding-left:5px;
    }
`;

const Input = (
    {
        inputValue='',
        fhChange = () => { },
        fnSubmit = () => { }

    }) => {

    return(
       <Wrapper onSubmit={fnSubmit}>
           
               <input 
                    type='text'
                    name='position'
                    value={inputValue}
                    onChange={fhChange}
                    placeholder='enter name of Location'
               />
               <Button
                    type='submit'
                    text='Search'
                />
       </Wrapper> 
    )
};
export default Input;