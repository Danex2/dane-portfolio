import React from 'react';

function Home() {
  return (
    <div className='portfolio-container'>
      <div className='main-intro-text'>
        <p className='name'>Dane Miller</p>
        <p className='title'>Frontend / UI Developer</p>
      </div>
      <div className='icon-container'>
        <a
          href='https://github.com/Danex2'
          className='fab fa-github fa-3x home-icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>Github</span>
        </a>
        <a
          href='https://twitter.com/hybridearth'
          className='fab fa-twitter-square fa-3x home-icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>Twitter</span>
        </a>
        <a
          href='https://codepen.io/Danex2'
          className='fab fa-codepen fa-3x home-icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>Codepen</span>
        </a>
        <a
          href='mailto:khadane.miller@gmail.com?Subject=Hello!'
          className='fas fa-envelope fa-3x home-icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>E-mail</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
