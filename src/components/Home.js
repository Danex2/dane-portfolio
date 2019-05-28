import React from 'react'

function Home() {
    return (
        <div class="portfolio-container">
            <div class="main-intro-text">
                <p class="name">Dane Miller</p>
                <p class="title">Frontend / UI Developer</p>
            </div>
            <div class="icon-container">
                <a href="https://github.com/Danex2" class="fab fa-github fa-3x home-icon" target="_blank" rel="noopener noreferrer"></a>
                <a href="https:/twitter.com/hybridearth" class="fab fa-twitter-square fa-3x home-icon" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://codepen.io/Danex2" class="fab fa-codepen fa-3x home-icon" target="_blank" rel="noopener noreferrer"></a>
                <a href="mailto:khadane.miller@gmail.com?Subject=Hello!" class="fas fa-envelope fa-3x home-icon" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    )
}

export default Home;
