import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
    .box{
        width:50%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`;

const WarningWindow = (
    {
        text = 'default text',
        fnButton = () => { }
    }) => {

    return(
       <Wrapper>
           <p>{text}</p>
           <div className="box">
            <Button text='Yes' fnClick={fnButton} />
            <Button text='No' fnClick={fnButton} />
           </div>
           
       </Wrapper> 
    )
};
export default WarningWindow;