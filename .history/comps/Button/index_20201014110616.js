import React, {useEffect} from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background-color:${props=>props.disabled ? props.disabled : "#B8B9BD"};
    display: flex;
    justify-content:center;
    align-items: center;
    width: 109px;
    height: 40px;
    background: #3670EE;
    border: 3px solid #002ED2;
    box-sizing: border-box;
    border-radius: 5px;
    
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;

`;


const Button = ({backgroundColor, text})=>{
    return <div>

        <ButtonStyle disabled={disabled}>
            {text}
        </ButtonStyle>
        
    </div>
}

Button.defaultProps = {
    text:"Login"
}

export default Button;