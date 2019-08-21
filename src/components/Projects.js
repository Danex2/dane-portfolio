import React from 'react';
import CoinInfoIMG from '../assets/screenshot.png';

function Projects() {
  return (
    <div className="projects__page">
      <div class="projects__container">
        <div class="project__item">
          <img src={CoinInfoIMG} alt="Project coin info" />
          <div class="project__description">
            <p class="project__title">
              Coin Info
                    </p>
            <p class="project__text">
              Coin info was made with React, Styled-components, and the coingecko API. It shows the latest
              prices for all cryptocurrencies as well as the change in price from day to day and price
              history.
                    </p>
            <div class="project__links">
              <span class="link"><a href="https://coininfo.netlify.com" target="_blank" rel="noopener noreferrer">Live</a></span>
              <span class="link"><a href="https://github.com/Danex2/coininfo"
                target="_blank" rel="noopener noreferrer">Github</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
