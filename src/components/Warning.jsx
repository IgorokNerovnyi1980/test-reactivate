import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    min-width:300px;
    min-height:200px;
    background-color:red;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`;

const WarningWindow = ({text='default text'}) => {

    return(
       <Wrapper>
           <p>{text}</p>
       </Wrapper> 
    )
};
export default WarningWindow;