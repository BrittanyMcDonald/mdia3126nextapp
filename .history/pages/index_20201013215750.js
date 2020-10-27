import React from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import Image from '../comps/HeroImage';


export default function Home() {
  return <div className="main">
          <div>
            <Image />
          </div>
        <div className="welcomeform">
      <WelcomeForm />
    </div>

  </div>
}
