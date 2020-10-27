import React, {useState} from 'react';
import Label from '../comps/Label';
import CheckboxField from '../comps/Checkbox';
import HighlightedText from '../comps/HighlightedText';


// const ChangePage = ()=>{
//   document.getElementsByClassName('signUp').style.display = "flex";
// }

export default function Home({open}) {

  const [nextPage, setNextPage] = useState(false);

  return <div className="main">
          <div>
            <Label />
            <CheckboxField />
          </div>
        <div className="welcomeform">
        <HighlightedText />
    </div>

  </div>
}
