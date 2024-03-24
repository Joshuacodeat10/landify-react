import youtube from './assets/Youtube.svg'
import instagram from './assets/Gradient.png'
import dribbble from './assets/Dribbble.svg'
import section3_logos from './assets/Logos.png'
import section4_client_laptop from './assets/Clients.png'
import section4_client_mobile from './assets/mobile/Clients.png';
import square_01 from './assets/01.svg';
import section5_square_02 from './assets/02.svg'
import section5_square_03 from './assets/03.svg'
import section5_square_04 from './assets/04.svg'
import section5_square_05 from './assets/05.svg'
import section5_square_06 from './assets/06.svg'
import section6_image from './assets/Image.png'
import section7_mockup from './assets/mockup.png'
import section8_illustration from './assets/Illustration.png'

import { useState } from 'react'
const Home = () => {
    const[socials, setSocials]= useState([
        {title:'Youtube Suscribers', number:'700k',image_path: youtube, id:1, classname:'social-1'},
        {title:'Instagram Followers', number:'2.4M',image_path: instagram, id:2, classname:'social-2'},
        {title:'Dribbble', number:'100k',image_path: dribbble, id:1, classname:'social-3'}
    ]);
    return (
        <div className="container" alt="12">
        <div className="section2">                      
                 {socials.map((social)=>(
                     <div className={`social ${social.classname}`} key={social.id}>{social.number}<div className="img"><img src={social.image_path}/><p>{social.title}</p></div></div>
                
                  ))}
         </div>
                    <div className="section3">
                        <div className="text"><h2 className="text-h2">Gets deals from <br/>100+ companies</h2><p>Subscribe to our application and get deals from top notch companies in the world every month. Be an exclusive member of the team.</p></div>
                        <div className="image"><img src={section3_logos}/></div>
                    </div>
                    <div className="section4">
                        <div className="column">
                        <div className="rectangle"><div className="enclose"><span className="punct">“</span><p>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p><div className="triangle"></div></div></div>
                        <div className="client"><img src={section4_client_laptop} className="client-laptop"/><img className="client-mobile" src={section4_client_mobile}/></div>
                        </div>
                    </div>
                    <div className="section5">
                        <div className="top-text"><h1>Tailor-made features</h1><p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p></div>
                        <div className="features"><div className="square"><img src={square_01}/><h2 >Robust</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></div><div className="square"><img src={section5_square_02}/><h2 >Flexibility</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></div> <div className="square"><img src={section5_square_03}/><h2 >User Friendly</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></div></div>
                        <div className="features"><div className="square">
                            <img src={section5_square_04}/><h2 >Multiple systems</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div><div className="square"><img src={section5_square_05}/><h2 >Better components</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p></div> <div className="square"><img src={section5_square_06}/><h2>Well organized</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                        </div>
                    </div>
                    </div>

                    <div className="section6">
                        <div className="steps"><h2>Install the device few easy steps.</h2><img className="img-steps"src={section6_image}/></div>
                        <div>
                    
                        <div className="all" >
                                <div className="stacks" style={{color:'white',background:'#8C30F5'}}>
                                <div className="circle" >
                            <img src={square_01}/></div><div>
                                <span><p style={{ color: 'white', fontWeight: 700 }}
>Step 1</p></span><p className="p-steps">
                                    Step Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</p></div></div>     <div className="stacks">
                                    <div className="circle">
                                        <img src={square_01}/></div><div>
                                        <span><p >Step 2</p></span><p className="p-steps">
                                            Step Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</p></div></div>       <div className="stacks">
                                            <div className="circle">
                                                <img src={square_01}/></div><div>
                                                <span><p >Step 3</p></span><p className="p-steps">
                                                    Step Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.</p></div></div>                </div>
                                                            </div>
                                                    </div>
                            
                                
                    <div className="section7">  
                        <img src={section7_mockup}/>
                        <div className="text-box"><div className="text1"><h2>Headline</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p><a className="get-started" style={{textAlign:'center', display:'flex' , justifyContent:'flex-start' }}>Get Started<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.2931 6.70711C14.9026 6.31658 14.9026 5.68342 15.2931 5.29289C15.6837 4.90237 16.3168 4.90237 16.7074 5.29289L22.7073 11.2929C23.0979 11.6834 23.0979 12.3166 22.7073 12.7071L16.7074 18.7071C16.3168 19.0976 15.6837 19.0976 15.2931 18.7071C14.9026 18.3166 14.9026 17.6834 15.2931 17.2929L19.586 13H2.01103C1.45265 13 1 12.5523 1 12C1 11.4477 1.45265 11 2.01103 11H19.586L15.2931 6.70711Z" fill="#8C30F5"/>
                        </svg></a></div></div>
                    </div>          
                    <div className="section8">
                        <div className="mail"><img src={section8_illustration}/><div className="text-input"><h1 >Join 569 more people in the waitlist</h1><div className="input"><input type="text" className="name" placeholder="your work email adress"/><input className="submit"type="submit" value="Join the waitlist" /></div></div></div>
                    </div>
                    </div>
                   
     
    );
}

export default Home;