import { MainStyles } from './styles'

import React, {FC} from 'react';


export const Main = () =>{
    interface Props {
        videoSrc: string;
      }
      
      const VideoPlayer: FC<Props> = ({videoSrc}) => (
        <video id="video-background" loop muted autoPlay={true}>
          <source src={videoSrc} type="video/mp4"/>
        </video>
      );


    return(
        <MainStyles>
            <div className='mainContainer'>
                <div className='bg-cont'>
                    <div className='img-powerade'>
                        <img src="./Powerade.svg" alt="" />
                        <h2>That's some <br/> kind of power</h2>
                    </div>
                    <VideoPlayer videoSrc='./bgVideo.mp4'/>
                </div>
            </div>
        </MainStyles>
    )
}