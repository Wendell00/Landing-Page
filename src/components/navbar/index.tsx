import { NavBarStyles } from './styles'
import { ImageHover } from './socialMedia/index' // Importando 
import { useEffect, useState } from 'react'

export const NavBar = () =>{

    const [navClass, setNavClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
        setNavClass('navbar-scrolled');
        } else {
        setNavClass('');
        }
    };

    return(
        <NavBarStyles>
            <div className={`navContainer ${navClass}`}>
                <div className="container-flex">

                    <div className="menu-mobile">
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
                        <img src="./profile-icon-mobile.svg" />
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