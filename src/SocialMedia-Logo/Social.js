import React from 'react'
import facebook from "./facebook.svg"
import  instagram from "./instagram.svg"
import spotify from "./spotify.svg"
import tumblr from "./tumblr.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"
import "./Social.css"

function Social() {
  return (
    <div>
      <div className='social-head'>
<img src={facebook} alt ="facebook-logo" className='social'/>
<img src={instagram} alt ="instagram-logo" className='social'/>
<img src={spotify} alt ="spotify-logo" className='social'/>
<img src={twitter} alt ="twitter-logo" className='social'/>
<img src={youtube} alt ="youtube-logo" className='social'/>
<img src={tumblr} alt ="tumblr-logo" className='social'/>

</div>
    </div>
  )
}

export default Social;
