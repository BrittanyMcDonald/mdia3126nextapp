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


const HomePage = ({logo, color}) => {

    return <div id="welcome">
        <LoginComponent>
            
        </LoginComponent>


    <div id="welcome">
        <img id="home_logo" src={logo} />
        <p id="welcome_msg">PlanetPlate is an app that explores
    dishes from a variety of different cultures, with the
    goal of inspiring and educating people about some of the different foods around the globe.</p>

        <div id="button_group">
            <CustomButton color="#4797FF" onClick={StartClick} /><br />
            <CustomButton width={200} id="tut_button" text="Tutorial" onClick={TutPageClick} />
        </div>
    </div>

    </div>
}


HomePage.defaultProps = {
    logo:HomeLogo,
    color:"#4797FF"
}

export default HomePage;