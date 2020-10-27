import React from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    padding: 10px;
    color: #FFF;
`;

const googleImg = require('../../assets/G.png');

const IconStyle = styled.div`
    background: #FFF;
`;

const Button = ({img})=>{
    return <div>
        <IconStyle><img id="googleicon" src={img} /></IconStyle>
        <div><ButtonStyle>Login with Google</ButtonStyle></div>
        {/* <ButtonStyle>
            <IconStyle><img id="googleicon" src={img} /></IconStyle>
            Login with Google
        </ButtonStyle> */}
    </div>
}

Button.defaultProps = {
    img:googleImg
}

export default Button;