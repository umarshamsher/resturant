import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';
import { useState } from 'react';

const Intro = () => {
  const[playvideo, setplayvideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = ()=>{

    setplayvideo((preplayvideo) => !preplayvideo)

    if(playvideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();

    }
  }
  return(

    <div className='app__video'>
      <video
      ref={vidRef}
      src={meal}
      controls={false}
      type="video/mp4"
      loop
      muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'
        onClick={handleVideo}
        >
          {playvideo ? 
          <BsPauseFill color="#fff" fontSize={30}/>
           : <BsFillPlayFill color="#fff" fontSize={30}/>} 

        </div>

      </div>
      
    </div>
  )
  };

export default Intro;
