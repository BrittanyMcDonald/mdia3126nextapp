import React from 'react';
import styled from 'styled-components';


const MainButton = styled.div`
    background: #4285F4;
`;


const Button = ()=>{
    return <div>
        <MainButton>Login with Google</MainButton>
    </div>
}

Button.defaultProps = {

}

export default Button;