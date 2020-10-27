import React from 'react';
import styled from 'styled-components';


const ButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    padding: 10px;
    color: #FFF;
`;

const IconStyle = styled.div`
    background: #FFF;
`;

const Button = ()=>{
    return <div>
        <ButtonStyle>
            <IconStyle><img id="googleicon" src="../../assets/G.png" /></IconStyle>
            Login with Google
        </ButtonStyle>
    </div>
}

Button.defaultProps = {
    
}

export default Button;