import React from 'react';
import SignUpForm from '../comps/SignUpForm';
import Image from '../comps/HeroImage';


export default function Home() {
  return <div id="main">
        <div id="welcomeform">
      <SignUpForm />
    </div>
    <div>
      <Image />
    </div>

  </div>
}
