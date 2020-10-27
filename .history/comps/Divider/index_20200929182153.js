import React from 'react';
import styled from 'styled-components';


const DividerContainer = styled.div`
    display: flex;
`;

const DividerStyle = styled.div`
display: flex;
    border: 1.5px solid #C6C6C6;
`;

const OrStyle = styled.div`
    font-size: 0.8em;
    color: #555555;
    padding: 5px;
`;

const Divider = ()=>{
    return <div>
        <DividerContainer>
            <DividerStyle></DividerStyle>
            <OrStyle>or</OrStyle>
            <DividerStyle></DividerStyle>
        </DividerContainer>
    </div>
}

Divider.defaultProps = {

}

export default Divider;