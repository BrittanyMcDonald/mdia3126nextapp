import React, {useState} from 'react';
import WelcomeForm from '../comps/WelcomeForm';
import SignUpForm from '../comps/SignUpForm';
import Image from '../comps/HeroImage';

const ChangePage = ()=>{
  //capture what happens and change the page state
}

export default function Home({expandSignUp}) {

  const [nextPage, setNextPage] = useState(false);

  return <div className="main">
          <div>
            <Image />
          </div>
        <div className="welcomeform">
      <WelcomeForm />
      <SignUpForm open={nextPage} />
    </div>

  </div>
}
