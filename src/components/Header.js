import React , { useState, useEffect, useContext }from 'react'
import { FaFacebookF, FaLinkedin, FaYoutube, FaAt } from "react-icons/fa"
import { getMenuArabic, getMenuFrench, getAuthMenuFrench, getAuthMenuArabic } from "../utils/language";
import { UserContext } from '../UserContext';

import "../styles/Header.css";

function Header() {


    const { User , setUser } = useContext(UserContext); 




    const [toggle, setToggle] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState({
        first: false,
        second: false,
        third: false,
        fourth : false
    });

    const [headerElements, setHeaderElements] = useState(getMenuFrench());
    const [isFrench, setIsFrench] = useState(true);


    const handleDropdown = () => {
        toggle ? setToggle(false) : setToggle(true);
    }


    const handleLanguage = () => {
        isFrench ? setIsFrench(false) : setIsFrench(true);
    }

    const handleLogout = () => {
        localStorage.removeItem("UserSession");
        setUser({
            isLoggedIn : false,
            sessionDetails : {}
        });
    }




    useEffect(() => {
        if(User.isLoggedIn){
            setHeaderElements( isFrench ? getAuthMenuFrench() : getAuthMenuArabic());
        }else {
            setHeaderElements( isFrench ? getMenuFrench() : getMenuArabic());
        }
    }, [isFrench, User])
    
    
    return (

        <div className={`header ${!isFrench && 'header--arabic'}`}>
            <div className={`header__left ${!isFrench && 'header--arab--left'}`}>
                <a href="/">
                    <img className="logo" src={process.env.PUBLIC_URL + `/images/${isFrench ? 'logo.png' : 'logo2.jpg'}`} alt="logo"/>
                </a>   
            </div>
            <div className={`header__right `}>
                <div className="menu">
                    <div className={`menu__social ${!isFrench && 'menu__social--arabic'}`}>
                        <div className="social">
                            <a href="#" className="social__link">
                                <FaAt className="social__icon" />
                            </a>
                        </div>
                        <div className="social">
                            <a href="#" className="social__link">
                                <FaFacebookF className="social__icon" />
                            </a>
                        </div>
                        <div className="social">
                            <a href="#" className="social__link">
                                <FaLinkedin className="social__icon" />
                            </a>
                        </div>
                        <div className="social social-last">
                            <a href="#" className="social__link">
                                <FaYoutube className="social__icon" />
                            </a>
                        </div>
                        <button id="lang" onClick={handleLanguage}>{isFrench ? 'العربية' : 'Français'}</button>
                    </div>
                    <div className={`menu__nav  ${ toggle && 'active'}` }>
                        <nav className="navbar">
                            <ul className={`nav ${!isFrench && 'nav--arabic'}`}>
                                { User.isLoggedIn ? 
                                (
                                        <>

                                        {Object.keys(headerElements).map((item,index) => (
                                            <>
                                                {Object.keys(headerElements)[index+1] ? (
                                                    <li key={index} className='nav__item'>
                                                        <a href={headerElements[item].link} className="link">{headerElements[item].title}</a>
                                                    </li>
                                                ) : (<button className="deconnection" onClick={handleLogout}>{headerElements[item].title}</button>)}
                                            </>
                                        ))}
                                        </>
                                ) 
                                
                                :
                                
                                (
                                    <>

                                    {headerElements.first?.subtitles && (
                                        <>
                                                            <li className={`nav__item nav__dropdown ${toggleDropdown.first && 'activatedropdown'}`}  onClick={() => setToggleDropdown({...toggleDropdown, first: !toggleDropdown.first})}>
                                                        <a href="#" className="link">{headerElements.first.title}</a>
                                                        <div className="dropdown-content">
                                                            {headerElements.first.subtitles.map( (item, index) => (
                                                                    <a href={`${headerElements.first.links[index]}`}>{item}</a>
                                                            ))}
                                                        </div>
                                                        
                                                </li>
                                                <li className={`nav__item nav__dropdown ${toggleDropdown.second && 'activatedropdown'}`}  onClick={() => setToggleDropdown({...toggleDropdown, second : !toggleDropdown.second})}>
                                                    <a href="#" className="link">{headerElements.second.title}</a>
                                                    <div className="dropdown-content">
                                                        {headerElements.second.subtitles.map( (item, index) => (
                                                            <a href={`${headerElements.second.links[index]}`}>{item}</a>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li className={`nav__item nav__dropdown ${toggleDropdown.third && 'activatedropdown'}`}  onClick={() => setToggleDropdown({...toggleDropdown, third: !toggleDropdown.third})}>
                                                    <a href="#" className="link">{headerElements.third.title}</a>
                                                    <div className="dropdown-content">
                                                        {headerElements.third.subtitles.map( (item, index) => (
                                                            <a href={`${headerElements.third.links[index]}`}>{item}</a>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li className={`nav__item nav__dropdown ${toggleDropdown.fourth && 'activatedropdown'}`} onClick={() => setToggleDropdown({...toggleDropdown, third: !toggleDropdown.fourth})} >
                                                    <a href="#" className="link">{headerElements.fourth.title}</a>
                                                    <div className="dropdown-content">
                                                        {headerElements.fourth.subtitles.map( (item, index) => (
                                                            <a href={`${headerElements.fourth.links[index]}`}>{item}</a>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li className="nav__item">
                                                    <a href="/login" className="link">{headerElements.fifth.title}</a>
                                                </li> 
                                        </>
                                        )}
                                    
                                    </>
                                )}
                                
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="hamburger" onClick={handleDropdown}>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
            </div>
        
        </div>

        
    )
}

export default Header
