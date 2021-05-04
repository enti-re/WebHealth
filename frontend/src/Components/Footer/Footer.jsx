import React from "react";
import FooterElement from './FooterComponent1';
import CopyRightFooter from './CopyRight';
import Fbutton from './Fbutton';
import Icons from './Icons';
import './Footer.css';
// import InstagramIcon from '@material-ui/icons/Instagram';


function Footer(){
        return <div id="footer">
            <div className="grid-container">
            <FooterElement className="grid-item" contactInfo = "Our Mission" details="To provide a platform where everyone has an access to healthy lifestyle"></FooterElement>
            <FooterElement className="grid-item" contactInfo = "Email Us" details="webHealth@info.in"/>
            <FooterElement className="grid-item" contactInfo = "Call Us"  details="+9123421"/>
            <Fbutton></Fbutton>
            </div>
            <hr></hr>
            <div className="grid-container">
                <CopyRightFooter />
                <Icons></Icons>
            </div>
        </div>
}

export default Footer;