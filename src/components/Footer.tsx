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
      <p>Built using React, deployed to GitHub Pages</p>
    </footer>
  );
}

export default Footer;