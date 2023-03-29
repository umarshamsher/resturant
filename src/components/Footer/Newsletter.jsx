import React from 'react';
import { SubHeading} from '../../components';  
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'> 
      <SubHeading title="NewsLetter" />
      <h1 className='headtext__cormorant'>Subscribe Our News Lette</h1>
      <p className='p__opensans'>And never miss our latest updates!</p>
    </div>

    <div className='app__newsletter-input flex__center'>
    <input type="email" placeholder='Enter your e-mail' />
    <button className='custom__button' type='button'>Subcribe</button>
    </div>
  </div>
);

export default Newsletter;
