import { NavBarStyles } from './styles'
import { ImageHover } from './socialMedia/index' // Importando 
import { useEffect, useState } from 'react'

export const NavBar = () =>{

    const [navClass, setNavClass] = useState('');
    const [menuMobile, setMenuMobile] = useState(false);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);
    const [profileMobile, setProfileMobile] = useState('./profile-icon-mobile.svg')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuMobile = () => {
        setMenuMobile(!menuMobile)
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavClass('navbar-scrolled');
        } else {
            setNavClass('');
        }
    };

    const handleResize = () =>{
        setWidthWindow(window.innerWidth);
    }

    return(
        <NavBarStyles>
            <div className={`navContainer ${navClass} 
                    ${menuMobile ? 'menuMobileActive' : ' '}`}>

                <div className={`navContainerMobile
                    ${menuMobile ? 'dis-block' : 'dis-none'}
                    ${widthWindow > 1029 ? 'dis-none' : 'dis-block'}
                `}>
                    <ul>
                        <li> <a href="#products">PRODUCT</a> </li>
                        <li> <a href="#partners">PARTNERS</a> </li>
                        <li> <a href="#contact">CONTACT US</a> </li>
                        <li className="socialMediaMobile"> 
                            <ImageHover social='facebook'/>
                            <ImageHover social='twitter'/>
                            <ImageHover social='youtube'/>
                            <ImageHover social='instagram'/>
                        </li>
                    </ul>
                </div>

                <div className="container-flex">

                    <div className="menu-mobile" onClick={handleMenuMobile}>
                        <img src="./menu-icon-mobile.svg" />
                    </div>

                    <div className='logoAndNav'>
                        <div className='logo'>
                            <img src="./powerade-logo.png" alt="" />
                        </div>
                        <div className='navList'>
                            <ul>
                                <li> <a href="#products">PRODUCT</a> </li>
                                <li> <a href="#partners">PARTNERS</a> </li>
                                <li> <a href="#contact">CONTACT US</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="profile-mobile">
                        <img src={profileMobile} onMouseEnter={()=>{
                            setProfileMobile('./socialMedia/profile-mobile-hover.svg')
                        }} onMouseLeave={()=>{
                            setProfileMobile('./profile-icon-mobile.svg')
                        }}/>
                    </div>

                    <div className='socialMedia'>
                        <ul>
                            <li>
                                <ImageHover social='facebook'/>
                            </li>
                            <li>
                                <ImageHover social='twitter'/>
                            </li>
                            <li>
                                <ImageHover social='youtube'/>
                            </li>
                            <li>
                                <ImageHover social='instagram'/>
                            </li>
                            <li>
                                <ImageHover social='profile-user'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavBarStyles>
    )
}