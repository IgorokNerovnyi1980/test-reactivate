import React,{ useState } from 'react';
import styled from 'styled-components';
//components
import WarningWindow from '../components/Warning';
import Geolocation from '../components/Geolocation';
import Input from '../components/Input';
import YourLocation from '../components/YourLocation';

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:grey;
`;

const Base = () => {

    const [ checkValue, setCheckValue ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [resolution, setResolution] = useState(false);
    const [ isWarning, setIsWarning ] = useState(false)

    const handleInputsChange = e => {
        if(e.target.name === 'myGeolocation'){
            setCheckValue(e.target.checked)
            setResolution(e.target.checked);
            // setIsWarning(true);
        } else if(e.target.name === 'position'){
            setInputValue(e.target.value);
        }  
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit')
    
    };

    const handleButtonClick = e => {
        if(e.target.name === 'Yes'){
            setResolution(true);
            setIsWarning(false);
        }
    }

    return(
        <Wrapper>
            <Geolocation
                checked={checkValue}
                fhChange={handleInputsChange}
            />
            { isWarning && <WarningWindow fnButton={handleButtonClick} /> }
            {resolution ?
             <YourLocation />
            :
            <Input 
                inputValue={inputValue}
                fhChange={handleInputsChange}
                fnSubmit={handleSubmit}
            />
            }
        </Wrapper>
    )
};

export default Base;