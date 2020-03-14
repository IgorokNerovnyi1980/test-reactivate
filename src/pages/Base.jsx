import React,{ useState } from 'react';
import styled from 'styled-components';
//components
import WarningWindow from '../components/Warning';
import Geolocation from '../components/Geolocation';
import Input from '../components/Input';

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:grey;
`;

const Base = () => {

    const [ checkValue, setCheckValue ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [root, setRoot] = useState(false);

    const handleInputsChange = e => {
        if(e.target.name === 'myGeolocation'){
            setCheckValue(e.target.checked)
            setRoot(e.target.checked);
        } else if(e.target.name === 'position'){
            setInputValue(e.target.value);
        }  
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit')
    
    }

    return(
        <Wrapper>
            <Geolocation
                checked={checkValue}
                fhChange={handleInputsChange}
            />
            {root && <WarningWindow/>}
            <Input 
                inputValue={inputValue}
                fhChange={handleInputsChange}
                fnSubmit={handleSubmit}
            />
        </Wrapper>
    )
};

export default Base;