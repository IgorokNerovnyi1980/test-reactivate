import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { parserColor } from '../helpers/parserColor'
//components
import Geolocation from '../components/Geolocation';
import Slider from '../components/Slider';
import Input from '../components/Input';

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:${props => `RGB(${props.bg})`};
`;

const Base = () => {

    const [ color, setColor ] = useState('0,255,255');
    const [sliderValue, setSliderValue] = useState(5)
    const [ checkValue, setCheckValue ] = useState(false);
    const [ locationValue, setLocationValue ] = useState('');
    const [ degValue, setDegValue] = useState('');

    useEffect(()=>{
        setColor(parserColor(sliderValue))
    },[sliderValue])


    const handleInputsChange = e => {
        switch(e.target.name) {
            case 'myGeolocation': 
                setCheckValue(e.target.checked);
                break
            case 'location': 
                setLocationValue(e.target.value);
                break
            case 'slider': 
                setSliderValue(e.target.value);
                break
            case 'deg': 
                setDegValue(e.target.value);
                break
            default: return;
          };
    };

    const handleSubmit = e => {
        e.preventDefault();
        switch(e.target.name) {
            case 'location': 
                console.log('submit',e.target.name, locationValue);
                break
            case 'deg': 
                console.log('submit',e.target.name, degValue);
                break
            default: return;
          };
    
    };


    return(
        <Wrapper bg={color}>
            <Geolocation
                checked={checkValue}
                fhChange={handleInputsChange}
            />
            <Input
                inputValue = {locationValue}
                inputName = 'location'
                inputType = 'text'
                btnLabel ='Search'
                btbType = 'submit'
                placeholder = 'enter name of location'
                top = '50'
                fhChange = {handleInputsChange}
                fnSubmit = {handleSubmit}
            />
            <Input
                inputValue = {degValue}
                inputName = 'deg'
                inputType = 'number'
                btnLabel = 'Apply'
                btbType = 'submit'
                placeholder = 'number of temperature'
                top = '70'
                fhChange = {handleInputsChange}
                fnSubmit = {handleSubmit}
            />
            <Slider
                value={sliderValue}
                fnInput={handleInputsChange}
            />
        </Wrapper>
    )
};

export default Base;