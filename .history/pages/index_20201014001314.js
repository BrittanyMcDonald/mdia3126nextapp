import React, {useState} from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import SignUpForm from '../comps/SignUpForm';
import Image from '../comps/HeroImage';

const ChangePage = ()=>{
  // document.getElementsByClassName('signUp').style.display = "flex";
}

export default function Home({open}) {

  const [nextPage, setNextPage] = useState(false);

  return <div className="main">
          <div>
            <Image />
          </div>
        <div className="welcomeform">
      <WelcomeForm />
      <SignUpForm className="signUp" open={nextPage} />
    </div>

  </div>
}
