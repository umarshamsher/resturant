import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {FooterOverlay, Newsletter} from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
<div className='app__footer section__padding'>

<FooterOverlay/>
<Newsletter/>

<div className='app__footer-links'>

    <div className='app__footer-links_contact'>
    <h1 className='app__footer-headtext'>Contact Us</h1>
    <p className='p__opensans'>9 W S3rd , New York.</p>
    <p className='p__opensans'>+923476057609</p>
    <p className='p__opensans'>+923417057609</p>
    </div>
    <div className='app__footer-links_logo'>
    <img src={images.gericht} alt="footer_logo" />
    <p className='p__opensans'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nam. </p>
    <img src={images.spoon} alt="footer__spoon" style={{marginTop:'15px'}} />
    <div className='app__footer-links_icons'>
    <FiFacebook/>
    <FiTwitter/>
    <FiInstagram/>
    </div>
    </div>
    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
    <p className='p__opensans'>Mon- Firday</p>
    <p className='p__opensans'>10:00 Am - 02:00 Am</p>
    <p className='p__opensans'>Saturday - Sunday</p> <p className='p__opensans'>10:00 Am - 02:00 Am</p>
    </div>
</div>
<div className='footer__copyright'>
    <p className='p__opensans'>2021 Gericht. All Rights reserved. </p>

</div>
</div>
);

export default Footer;
