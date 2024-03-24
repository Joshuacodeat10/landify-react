import google_play from './assets/google-play.svg'
import apple_store from './assets/apple-store.svg'
import landify_logo from './assets/Logo.svg'
const Footer = () => {
    return ( 
        <div class="footer">
        <div class="footer-left">
        <img src={landify_logo} class="img-hide"/><div class="hide"> <div class="footer-links"><a>Download Now</a><a class="links">License</a></div>
<div class="footer-links link2"><a class="first">About</a><a class="links">Features</a><a class="links">Pricing</a><a class="links">Careers</a><a class="links">Help</a><a class="links">Privacy Policy</a></div>
<p>© 2020 Landify UI Kit. All rights reserved</p> </div>
        </div>
        <div class="footer-mobile">
          <img class="landify-img"src={landify_logo}/>
          <div class="content1">
          <div class="footer-links link2"><a class="first">About</a><a class="links">Features</a><a class="links">Pricing</a><a class="links">Careers</a><a class="links">Help</a><a class="links">Privacy Policy</a></div>
          <div class="footer-links link3"><a class="links">Download Now</a><a class="links linkfix">License</a></div>
         
        </div>
        <div class="mobile-right">
          <h2>Get the app</h2> 
          <div class="mobile-app">
             
            
          <img   src={google_play}/>
          <img src={apple_store}/>
        
          </div>
        </div>
             </div>
       
             <div class="footer-right">
              <h2>Get the app</h2> 
              <div class="apps">
                 
                
              <img src={google_play}/>
              <img src={apple_store}/>
            
              </div>
            </div>
        <div class="mobile-copyright">
          <p>© 2020 Landify UI Kit. All rights reserved</p>
        </div>
        </div>
     );
}
 
export default Footer;