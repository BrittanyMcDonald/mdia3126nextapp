import React, {useState} from 'react';
import { HeroImage } from './HeroImage.stories';
import WelcomeForm from './WelcomeForm.stories';


const HomePage = () => {

    return <div id="app_page">
        
        <div>
            <HeroImage></HeroImage>
        </div>
        <div>
            <WelcomeForm></WelcomeForm>
        </div>


    </div>
}


HomePage.defaultProps = {

}

export default HomePage;