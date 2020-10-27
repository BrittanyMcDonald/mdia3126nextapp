import React from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #FFF;
    max-width: 40%;
    padding: 10px;
`;

const googleImg = require('../../assets/G.png');

const IconStyle = styled.div`
    position: absolute;
    background: #FFF;
    padding: 10px;
    
`;

const Button = ({img})=>{
    return <div>
        {/* <IconStyle><img id="googleicon" src={img} /></IconStyle>
        <div><ButtonStyle>Login with Google</ButtonStyle></div> */}
        <ButtonStyle>
            <IconStyle><img src={img} /></IconStyle>
            Login with Google
        </ButtonStyle>
    </div>
}

Button.defaultProps = {
    img:googleImg
}

export default Button;