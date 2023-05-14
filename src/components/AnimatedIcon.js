import React from 'react';
import UseAnimations from 'react-useanimations';
import twitter from 'react-useanimations/lib/twitter'
const AnimatedIcon = () => <UseAnimations animation={twitter} size={900} wrapperStyle={{ padding: 100 }} strokeColor="#f2c46d"/>;

export default AnimatedIcon;