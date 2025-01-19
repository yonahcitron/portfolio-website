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
      <p>Built using React, hosted on GitHub Pages.</p>
      <p>Note: Demo pictures of company projects are excluded to respect intellectual property rights.</p>
      <p>&copy; 2025 Yonah Citron. All rights reserved.</p>
    </footer>
  );
}

export default Footer;