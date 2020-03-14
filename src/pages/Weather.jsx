import React,{ useState, useEffect } from 'react';
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

    const getLocal = function(){
        return JSON.parse(localStorage.getItem('resolution'));
    };

    const [ checkValue, setCheckValue ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ resolution, setResolution ] = useState(false);
    const [ isWarning, setIsWarning ] = useState(false);

    useEffect(() => {
        const localValue = getLocal();
        setCheckValue(localValue);

        console.log('use', localValue, typeof(localValue))
        if(localValue === false){
            console.log('if')
            setIsWarning(true)
        }

    },[]); // eslint-disable-line


    const handleInputsChange = e => {
        if(e.target.name === 'myGeolocation'){
            setCheckValue(e.target.checked)
            setResolution(e.target.checked);
            localStorage.setItem('resolution', e.target.checked);

            
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
            setCheckValue(true);
            setIsWarning(false);
            localStorage.setItem('resolution', true);
        }else if(e.target.name === 'No'){
            setResolution(false);
            setCheckValue(false);
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
                opacity={isWarning ? 0 : 1}
            />
            }
        </Wrapper>
    )
};

export default Base;