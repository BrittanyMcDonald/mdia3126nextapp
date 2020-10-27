import React from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    padding: 10px;
    color: #FFF;
`;

const GoogleImg = require('./assets/G.png');

const Button = ()=>{
    return <div>
        <ButtonStyle>Login with Google</ButtonStyle>
    </div>
}

Button.defaultProps = {

}

export default Button;