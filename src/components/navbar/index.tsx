import { NavBarStyles } from './styles'
import { ImageHover } from './socialMedia/index'
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
                <div className='p1'>
                    <div className='logo'>
                        <img src="./powerade-logo.png" alt="" />
                    </div>
                    <div className='anchorList'>
                        <ul>
                            <li>PRODUCTS</li>
                            <li>PARTNERS</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
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
        </NavBarStyles>
    )
}