import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { parserColor } from '../helpers/parserColor'
//components
import Geolocation from '../components/Geolocation';
import Slider from '../components/Slider'

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:${props => `RGB(${props.bg})`};
`;

const Base = () => {

    const [ color, setColor ] = useState('0,255,255');
    const [sliderValue, setSliderValue] = useState(5)
    const [ checkValue, setCheckValue ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');

    useEffect(()=>{
        setColor(parserColor(sliderValue))
    },[sliderValue])


    const handleInputsChange = e => {
        if(e.target.name === 'myGeolocation'){
            setCheckValue(e.target.checked)
        } else if(e.target.name === 'position'){
            setInputValue(e.target.value);
        } else if(e.target.name === 'slider'){
            setSliderValue(e.target.value)
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit')
    
    };

    const handleButtonClick = e => {
        if(e.target.name === 'Yes'){  
            setCheckValue(true);
            localStorage.setItem('resolution', true);
        }else if(e.target.name === 'No'){
            setCheckValue(false);
        }
    }


    return(
        <Wrapper bg={color}>
            <Geolocation
                checked={checkValue}
                fhChange={handleInputsChange}
            />
            <Slider
                value={sliderValue}
                fnInput={handleInputsChange}
            />
        </Wrapper>
    )
};

export default Base;