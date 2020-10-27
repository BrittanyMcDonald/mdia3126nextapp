import React from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import HeroImage from '../comps/HeroImage';


export default function Home() {
  return <div>
    <div>
      <HeroImage />
    </div>
    <div>
      <WelcomeForm />
    </div>
  </div>
}
