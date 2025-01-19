import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yonahcitron" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yonah-citron-b76705192/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built using React, hosted on GitHub Pages (for free!) </p>
      <p>ALSO MENTION HOW SCREENSHOTS OF PROJECTS ARE JUST SAMPLES DUE TO PRIVACY ETC</p>
    </footer>
  );
}

export default Footer;