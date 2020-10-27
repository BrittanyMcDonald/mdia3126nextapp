import React from 'react';


const LoginComponent = styled.div`
    display:flex;
    flex-direction: column;

`;


const WelcomeText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    color: #000000;
`;


const HomePage = () => {

    return <div id="welcome">
        <LoginComponent>
            
        </LoginComponent>


    </div>
}


HomePage.defaultProps = {
    logo:HomeLogo,
    color:"#4797FF"
}

export default HomePage;