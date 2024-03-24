import logo from './assets/Logo.svg'
import landify from './assets/Landify.svg'
import { useState } from 'react';
const Navbar = () => {
    const[show, setShow] = useState(false);
    const navbarClick= () =>{
        setShow(!show)
    }
    return (  
        <div className="containe">
            <div className="wrapper">
                <div className="section1">
                    <div className="bg-image"></div>
                        <div className="navbar">
                            <div className="brand-title">
                                <img src={logo} className="logo" ></img>
                                <img className="Landify" src={landify}></img>
                            </div>
                
                            <a href="#" className='toggle-button' onClick={navbarClick}>
                                <svg className={`bar ${show ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M24.5 15H8.16663" stroke="#8C30F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24.5 7H3.5" stroke="#8C30F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24.5 23H3.5" stroke="#8C30F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <svg className={`cancel ${show ? 'active' : ''}`}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18" stroke="#8C30F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 6L18 18" stroke="#8C30F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                             <div className={`navbar-links  ${show ? 'active' : ''}`}>
                                <ul>
                                    <li className="list-item"><a href="#">About</a></li>
                                    <li className="list-item"><a href="#">Products</a></li>
                                    <li className="list-item"><a href="#">Pricing</a></li>
                                    <li className="list-item"><a href="#">Blog</a></li>
                                    <li className="list-item"><a href="#">Jobs</a></li>
                                    <li className="list-item"><a href="#">More</a></li>
                                </ul>
                            </div>
                        </div>

                    <div className="button" >
                        <div className="b">
                            <button className="btn1">Login</button>
                            <button className="btn2">Signup</button>
                        </div>
                    </div> 
                {/* <div className="body">
                    <div className="item left"><h1 className="h1">Join the<br></br> biggest socials community.</h1>
                        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <button className="btn3">Get Started</button>
                </div>
                
                </div>  */}
                
        
        <div class="body">
            <div class="left-section">
            <div class="item left">
                <h1 class="h1">Join the<br/> biggest socials<br/> community.</h1>
                <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p><button class="btn3">Get Started</button></div>
        </div>
          
          <div class="right-section">

          </div>
      </div>
        </div>
        </div>
        </div>
    );
}
export default Navbar;