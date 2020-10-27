import React from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    flex: 3;
    padding: 10px;
    color: #FFF;
`;

const googleImg = require('../../assets/G.png');

const IconStyle = styled.div`
    background: #FFF;
    flex:1;
`;

const Button = ({img})=>{
    return <div>
        <ButtonStyle>
            <IconStyle><img id="googleicon" src={img} /></IconStyle>
            Login with Google
        </ButtonStyle>
    </div>
}

Button.defaultProps = {
    img:googleImg
}

export default Button;