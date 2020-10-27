import React from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    padding: 10px;
    color: #FFF;
`;

const googleImg = require('../../assets/G.png');

const Button = ({img})=>{
    return <div>
        <ButtonStyle>
            <img id="googleicon" src={img} />
            Login with Google</ButtonStyle>
    </div>
}

Button.defaultProps = {
    img:googleImg
}

export default Button;