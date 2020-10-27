import React, {useEffect} from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background-color:${props=>props.backgroundColor ? props.backgroundColor : "#4285F4"};
    display: flex;
    justify-content:center;
    align-items: center;
    width: 109px;
    height: 40px;
    background: #3670EE;
    border: 3px solid #002ED2;
    box-sizing: border-box;
    border-radius: 5px;
`;


const Button = ({backgroundColor, text})=>{
    return <div>

        <ButtonStyle backgroundColor={backgroundColor}>
            {text}
        </ButtonStyle>
        
    </div>
}

Button.defaultProps = {
    backgroundColor:null,
    text:"Login"
}

export default Button;