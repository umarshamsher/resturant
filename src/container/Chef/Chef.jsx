import React from 'react';
import { SubHeading} from '../../components';
import { images} from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef Word" />
      <h1 className='p__cormorant'>What We Belive In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.   </p>
        </div>
          <p className='p__opensans'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, itaque eaque nobis voluptate officia enim ut cupiditate sequi perspiciatis assumenda expedita sed vel libero beatae in, possimus quia, temporibus vitae? </p>
      </div>


      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
