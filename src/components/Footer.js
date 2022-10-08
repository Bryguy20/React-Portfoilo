import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer(){
    return(
    <footer className="contact-loactions">
   <div className='gitHub'>
  <a href="https://github.com/Bryguy20"><GitHubIcon className="mediaIcon github" /> </a>
  </div>
  <div className='linkedIn'>
 <a href="https://www.linkedin.com/in/bryan-segarra-2b680a238/"><LinkedInIcon className="mediaIcon linkedIn" /></a>
        </div>
    </footer>
    );
}

export default Footer;