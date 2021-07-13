import React , { useState, useEffect }from 'react'
import { Button } from 'react-bootstrap';


import { FaFacebookF, FaLinkedin, FaYoutube, FaAt } from "react-icons/fa"
import { getMenuArabic, getMenuFrench } from "./language.js";
function Header() {


    const [toggle, setToggle] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleDropdown1, setToggleDropdown1] = useState(false);
    const [toggleDropdown2, setToggleDropdown2] = useState(false);
    const [headerElements, setHeaderElements] = useState(getMenuFrench());
    const [isFrench, setIsFrench] = useState(true);


    const handleDropdown = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const handleDropdownMenu = (number) => {
        switch(number) {
            case 1:
                toggleDropdown ? setToggleDropdown(false) : setToggleDropdown(true)
                break;
            case 2:
                toggleDropdown1 ? setToggleDropdown1(false) : setToggleDropdown1(true)
                break;
            default:
                toggleDropdown2 ? setToggleDropdown2(false) : setToggleDropdown2(true)
                
        }
    }

    const handleLanguage = () => {
        isFrench ? setIsFrench(false) : setIsFrench(true);
    }




    useEffect(() => {
        setHeaderElements( isFrench ? getMenuFrench() : getMenuArabic());
        console.log(headerElements);
    }, [isFrench])
    
    
    return (
        <div className={`header ${!isFrench && 'header--arabic'}`}>
            <div className={`header__left ${!isFrench && 'header--arab--left'}`}>
                <img className="logo" src={`./images/${headerElements.link}`} alt="logo"/>
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
                                <li className={`nav__item nav__dropdown ${toggleDropdown && 'activatedropdown'}`}  onClick={() => handleDropdownMenu(1)}>
                                    <a href="#" className="link">{headerElements.first.title}</a>
                                    <div className="dropdown-content">
                                        {headerElements.first.subtitles.map( (item, index) => (
                                            <a href={`${headerElements.first.links[index]}`}>{item}</a>
                                        ))}
                                        
                                    </div>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="link">{headerElements.second.title}</a>
                                </li>
                                <li className={`nav__item nav__dropdown ${toggleDropdown1 && 'activatedropdown'}`}  onClick={() => handleDropdownMenu(2)}>
                                    <a href="#" className="link">{headerElements.third.title}</a>
                                    <div className="dropdown-content">
                                        {headerElements.third.subtitles.map( (item, index) => (
                                            <a href={`${headerElements.third.links[index]}`}>{item}</a>
                                        ))}
                                    </div>
                                </li>
                                <li className={`nav__item nav__dropdown ${toggleDropdown2 && 'activatedropdown'}`} onClick={() => handleDropdownMenu(3)} >
                                    <a href="#" className="link">{headerElements.fourth.title}</a>
                                    <div className="dropdown-content">
                                        {headerElements.fourth.subtitles.map( (item, index) => (
                                            <a href={`${headerElements.fourth.links[index]}`}>{item}</a>
                                        ))}
                                    </div>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="link">{headerElements.fifth.title}</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="link">{headerElements.sixth.title}</a>
                                </li>
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
