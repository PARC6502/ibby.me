import React from 'react';
import { FaPlus, FaTag } from 'react-icons/fa';

import Quantumbaking from '../assets/images/portfolio/quantumbaking.png';
import Foodhall from '../assets/images/portfolio/foodhall.jpg';
import Polecrobat from '../assets/images/portfolio/polecrobat.jpg';
import Axcel from '../assets/images/portfolio/axcel.png';

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Links to things I have done or am involved with</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.quantumbaking.com/"
              >
                <img alt="Logo for QuantumBaking blog" src={Quantumbaking} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>QuantumBaking</h5>
                    <p>420 lifestyle blog built with a friend</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.foodhallproject.org/"
              >
                <img alt="Foodhall Project Logo" src={Foodhall} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Foodhall</h5>
                    <p>Grassroots community project in Sheffield where I have been a volunteer for 2 years. The project aims to tackle issues of social isolation and brings people together in a lot of different ways.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/polecrobat"
              >
                <img alt="Image of LED Poi spinning" src={Polecrobat} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Polecrobat</h5>
                    <p>An instagram blog for the exploration of movement. Will explore poledancing, acrobalance, circus skills, and fitness.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://axcelacademy.co.uk/"
              >
                <img alt="Axcel Academy Logo" src={Axcel} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Axcel Academy Website</h5>
                    <p>Website I led the development of, working alongside a designer and content creator. 
                    I also set up their emails and moodle, but I can't link that :D</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
