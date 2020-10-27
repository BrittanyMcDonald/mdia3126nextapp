import React, {useState} from 'react';


// const ChangePage = ()=>{
//   document.getElementsByClassName('signUp').style.display = "flex";
// }

export default function Home({open}) {

  const [nextPage, setNextPage] = useState(false);

  return <div className="main">
          <div>
            {/* <Image /> */}
          </div>
        <div className="welcomeform">
      <WelcomeForm />
      <SignUpForm className="signUp" open={nextPage} />
    </div>

  </div>
}
