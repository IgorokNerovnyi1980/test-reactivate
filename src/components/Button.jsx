import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    min-width:50px;
    max-height:50px;
    padding:5px 8px;
    background-color:blue;
    border:1px solid blue;
    color:white;
    cursor:pointer;
    transition:0.2s;
    
    :hover{
        background-color:white;
        color:blue;
    }
    :active{
        transform:scale(0.95);
    }
`;

const Button = (
    {
        text = 'default',
        type = 'button',
        fnClick = () => { },
        fnChange = () => { }


    }) => {

    return(
        <Wrapper
            type={type}
            onClick={fnClick}
            onChange={fnChange}
            name={text}
        >
            {text}
        </Wrapper>
    )
};

export default Button;