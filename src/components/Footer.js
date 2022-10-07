import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer(){
    return(
    <footer className="contact-loactions">
        
  <a href="https://github.com/Bryguy20"><GitHubIcon className="mediaIcon github" /> </a>
 <a href="https://www.linkedin.com/in/bryan-segarra-2b680a238/"><LinkedInIcon className="mediaIcon linkedIn" /></a>
        
    </footer>
    );
}

export default Footer;