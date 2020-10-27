import React from 'react';
import styled from 'styled-components';


const DividerStyle = styled.div`
    border: 1.5px solid #C6C6C6;
    display: flex;
`;

const OrStyle = styled.div`
    font-size: 0.8em;
    color: #555555;
    padding: 5px;
`;

const Divider = ()=>{
    return <div>
        <DividerStyle></DividerStyle>
        <OrStyle>or</OrStyle>
        <DividerStyle></DividerStyle>
    </div>
}

Divider.defaultProps = {

}

export default Divider;