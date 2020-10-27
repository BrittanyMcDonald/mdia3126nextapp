import React from 'react';
import Button from '../comps/Header';


export default {
  title: 'Example/Header',
  component: Button
};


export const BasicButton = () => <Button />; 

export const ColoredButton = () => <Button color="#3F3" highlight={true} />; 