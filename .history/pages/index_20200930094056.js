import React from 'react';
import SignUpForm from '../comps/SignUpForm';
import HeroImage from '../comps/HeroImage';


export default function Home() {
  return <div id="main">
    <div>
      <HeroImage />
    </div>
    <div id="welcomeform">
      <SignUpForm />
    </div>
  </div>
}
