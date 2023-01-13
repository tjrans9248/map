import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Icon.css';
const Icons = ({ image }) => {
  const icons = [
    { id: 'cafe', icon: 'A', imagePic: 'images/hotel.png' },
    { id: 'bank', icon: 'B', imagePic: 'images/hotel.png' },
    { id: 'market', icon: 'C', imagePic: 'images/hotel.png' },
    { id: 'hospital', icon: 'D', imagePic: 'images/hotel.png' },
  ];

  const iconList = icons.map((image, i) => (
    <button className="button-image" key={i} id={image.id}>
      <img src={image.imagePic} alt="icons" className="icon-image" />
    </button>
  ));
  return (
    <>
      <div className="icon-image">{iconList}</div>
    </>
  );
};

export default Icons;
