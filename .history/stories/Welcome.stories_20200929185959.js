import React from 'react';


const LoginComponent = styled.div`
    display:flex;
    flex-direction: column;

`;

const HomePage = ({logo, color}) => {

    return <div id="app_page">
    
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