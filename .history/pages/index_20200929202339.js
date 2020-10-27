import React from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import HeroImage from '../comes/HeroImage';


export default function Home() {
  return <div>
    <div>
      <HeroImage></HeroImage>
    </div>
    <div>
      <WelcomeForm></WelcomeForm>
    </div>
  </div>
}
