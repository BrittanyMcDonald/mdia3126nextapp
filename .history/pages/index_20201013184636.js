import React from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import Image from '../comps/HeroImage';


export default function Home() {
  return <div id="main">
          <div>
            <Image />
          </div>
        <div id="welcomeform">
      <WelcomeForm />
    </div>

  </div>
}
