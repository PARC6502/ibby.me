import React from 'react';
import { FaEnvelope, FaMedium, FaGithub } from 'react-icons/lib/fa';

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:theibbster@protonmail.com">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@ibrahim.serafy"
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
  </ul>
);

export default SocialLinks;
