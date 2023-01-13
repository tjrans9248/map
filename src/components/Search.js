import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Icons from './Icons';
import '../styles/Search.css';

const Search = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="입력하세요" />
        <Icons />
      </div>
    </>
  );
};

export default Search;
