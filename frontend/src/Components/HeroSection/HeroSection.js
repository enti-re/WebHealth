import React from 'react';
import { Button } from '../NavigationBar/Button';
import './HeroSection.css';
import * as Fa from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome Home</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <span className="get-started">
        <Link to="/register">
          GET STARTED
        </Link>
        </span>

        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        
        <a href="https://drive.google.com/file/d/15grLQ0SQle4eXytUnUTfmDom7lA5cRJl/view?usp=sharing" target="_blank">
          WATCH VIDEO 
        </a>
              <IconContext.Provider value={{size: "30px" , style: { marginLeft: ".5rem" }}}>
          <Fa.FaPlayCircle />
          </IconContext.Provider>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;