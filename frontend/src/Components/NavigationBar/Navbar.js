import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import * as Fa from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              WebHealth
              <IconContext.Provider value={{size: "40px" , style: { marginLeft: ".5rem", opacity: ".9" }}}>
                <Fa.FaDumbbell />
              </IconContext.Provider>
              {/* <i class="fas fa-dumbbell"></i> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
              <IconContext.Provider value={{color: "white" , style: {marginTop: "-.7rem"}}}>
              <Fa.FaBars />
              </IconContext.Provider>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <Link
                  to='/register'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to='/register'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                 Log In
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'><Link className="link" to="/register">SIGN UP</Link></Button>}
            <div className="divider"/>
            {button && <Button buttonStyle='btn--outline'><Link className="link" to="/register">LOG IN</Link></Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;