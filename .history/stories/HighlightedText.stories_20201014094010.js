import React from 'react';
import HighlightedText from '../comps/HighlightedText';


export default {
  title: 'Highlighted Text',
  component: HighlightedText
};



export const HighlightedComp = ({highlight}) => <HighlightedText backgroundColor={highlight}/>; 