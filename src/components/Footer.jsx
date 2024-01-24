import React from "react";
import abc from '../assets/Instagram_icon.png';
import bca from '../assets/pngwing.com (1).png';
import xyz from '../assets/vecteezy_youtube-logo-png-youtube-icon-transparent_18930747.png';
import bcd from '../assets/teli.png'
import cde from '../assets/maillogo.png'

function Footer(){ 
return (
   
<div className="foot">
  
  <div>
    <div className="da">

          <h3 className="yellow">Follow US</h3>
      
          <a target="blank" rel="noopener" href="https://instagram.com/m_king_qureshi_7" >
          <img className="ins" src={abc}/>
          </a> <br/>
        
          <a target="blank" rel="noopener" href="https://www.facebook.com/profile.php?id=100055032715932">
          <img className="ins" src={bca}/>
          </a><br/>

          <a target="blank" rel="noopener" href="https://www.youtube.com/channel/UCLcEmDWa_4n7ajnNJlHiNZQ">
          <img className="yo" src={xyz}/>
          </a><br/>
          </div>
  </div>

        <div className="pa">
             <h3 className="yellow">Our Product</h3>
                <div>
                    <a style={{ textDecoration: 'none'}} target="blank"  href="#home" >
                    <h6 className="white">AMOLED Watches</h6>
                    </a>

                    <a style={{ textDecoration: 'none'}} target="blank"  href="#home" >
                    <h6 className="white">Smart Wathes</h6>
                    </a>

                    <a style={{ textDecoration: 'none'}} target="blank"  href="#home" >
                    <h6 className="white">Bluetooth Calling</h6></a>
                </div>
        </div>
        <div className="pa">
          <h3 className="yellow">Help Desk</h3>
      
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
          <h6 className="white">Support</h6>
          </a>
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
          <h6 className="white">Service Center</h6>
          </a>
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
          <h6 className="white">Track Your Order</h6>
          </a>
          
        </div>
        <div>
        <div className="pa">
          <h3 className="yellow">About Boltt</h3>
          <a style={{ textDecoration: 'none'}}  target="New"  href="About.jsx" >
          <h6 className="white">About Us</h6>
          </a>
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
          </a>
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
            <h6 className="white">Privacy Policy</h6>
          </a>
          
          </div>
          </div>
      <div>
        <div className="pa">
          <h3 className="yellow"> Legal</h3>
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
          <h6 className="white">Terms & Condition</h6>
          </a>
          <a style={{ textDecoration: 'none'}}  target="blank"  href="#home" >
          <h6 className="white">Privacy Policy</h6>
          </a>  
       
      </div>
    </div>
    

    <div>
        <div id="cone">
          <h3 className="yellow"> Contact Us</h3>
          <a>
          <h6 className="white"><img className="mail" src={cde}/>muzammilqureshijio123@gmai.com</h6>
          <h6 className="white"><img className="teli" src={bcd}/>+91 9173-245-817</h6>
          </a>
          <a>
          <h6 className="white"><img className="mail" src={cde}/>abdullahmalek196@gmail.com</h6>
          <h6 className="white"><img className="teli" src={bcd}/>+91 8866-914-884</h6>
          </a>
          <h6 className="white"><img className="mail" src={cde}/>tosifkureshi91@gmail.com</h6>
          <a><h6 className="white"><img className="teli" src={bcd}/>+91 9081-765-322</h6>
          </a>
          
            
      </div>
    </div>
</div>
  
     
  );
 }
export default Footer;