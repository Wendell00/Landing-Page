import { NavBarStyles } from './styles'
import { useState } from 'react';

export const NavBar = () =>{

    const handleMouseEnter = (): any => {
        console.log('oi')
      };
  
    return(
        <NavBarStyles>
            <div className='navContainer'>
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
                        <li onMouseEnter={handleMouseEnter()}>
                            <img className='facebook' src='./socialMedia/facebook.svg'/>
                        </li>
                        <li><img className='twitter' src="./socialMedia/twitter.svg"/></li>
                        <li><img className='youtube' src="./socialMedia/youtube.svg"/></li>
                        <li><img className='instagram' src="./socialMedia/instagram.svg"/></li>
                        <li><img className='profile-user' src="./socialMedia/profile-user.svg"/></li>
                    </ul>
                </div>
            </div>
        </NavBarStyles>
    )
}