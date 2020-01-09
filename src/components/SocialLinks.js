import React from 'react';
import { FaEnvelope, FaMedium, FaGithub} from 'react-icons/fa';
import Socialhome from '../assets/images/svg-icons/Socialhome.svg';
import BlogIcon from '../assets/images/svg-icons/blog.svg';

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ibby.blog/"
      >
        {/* <BlogIcon /> */}
      </a>
    </li>
    <li>
      <a href="mailto:theibbster@protonmail.com">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@theibbster"
      >
        <FaMedium />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/PARC6502"
      >
        <FaGithub />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://socialhome.network/u/theibbster/"
      >
        {/* <img className="" src={Socialhome} alt="" /> */}
        <Socialhome />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
