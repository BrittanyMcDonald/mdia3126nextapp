import React, {useState} from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background-color:${props=>props.disabled ? "#999999" : "#B8B9BD"};
    display: flex;
    justify-content:center;
    align-items: center;
    width: 109px;
    height: 40px;
    background: #3670EE;
    border: 3px;
    border-color:${props=>props.disabled ? "#002ED2" : "none"}
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


const Button = ()=>{
    const [disabled, setDisabled] = useState(false);

    return <div>

        <ButtonStyle disabled={disabled} onClick={() => {
                    setDisabled(!disabled);
                }}>
            Button
        </ButtonStyle>
        
    </div>
}

Button.defaultProps = {
}

export default Button;