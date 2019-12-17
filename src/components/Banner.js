import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Ibby</h1>
      <h3>
        Web developer, pole dancer, aspiring artist, passionate about tackling issues related to social isolation.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
