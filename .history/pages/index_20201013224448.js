import React, {useState} from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import Image from '../comps/HeroImage';

// const [nextPage, setNextPage] = 

// const ChangePage = ()=>{
//   //capture what happens and change the page state
// }

export default function Home() {
  return <div className="main">
          <div>
            <Image />
          </div>
        <div className="welcomeform">
      <WelcomeForm />
      <SignUpForm />
    </div>

  </div>
}
