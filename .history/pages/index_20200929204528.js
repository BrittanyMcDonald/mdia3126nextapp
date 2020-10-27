import React from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import HeroImage from '../comps/HeroImage';


export default function Home() {
  return <div id="main">
    <div>
      <HeroImage />
    </div>
    <div id="welcome">
      <WelcomeForm />
    </div>
  </div>
}
