import React from 'react';
import styled from 'styled-components';


const BasicButtonStyle = styled.div`
    background: #4285F4;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #FFF;
    max-width: 100%;
    padding: 10px;
    border-radius: 5px;
`;


const BasicButton = ()=>{
    return <div>
        <BasicButtonStyle>
            Login
        </BasicButtonStyle>
    </div>
}

BasicButton.defaultProps = {

}

export default BasicButton;