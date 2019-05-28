import React from 'react'
import TwitchyIMG from '../assets/twitchy.png'

function Projects() {
  return (
    <React.Fragment>
      <div className="projects-container">
        <div className="project-item-container">
          <div className="project-item">
            <img src={TwitchyIMG} alt="Twitchy react app project" />
          </div>
          <div className="project-item-description">
            <h1>Twitchy</h1>
            <p>A react app that searches for random twitch.tv streamers based on the amount of viewers or the game
                they are playing. I made this app to find streamers I wouldn't normally watch hoping to find new
                    people to watch or explore games I don't usually play.</p>
            <div className="project-icons">
              <i className="fab fa-react fa-3x"></i>
              <i className="fab fa-sass fa-3x"></i>
              <i className="fab fa-twitch fa-3x"></i>
              <i className="fab fa-js-square fa-3x"></i>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/Danex2/twitchy" className="project-link" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://twitchyapp.herokuapp.com" className="project-link" target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
        </div>
        {/*<div className="project-item-container-2">
          <div className="project-item">
            <img src={TwitchyIMG} alt="Twitchy react app project" />
          </div>
          <div className="project-item-description">
            <h1>Twitchy</h1>
            <p>A react app that searches for random twitch.tv streamers based on the amount of viewers or the game
                they are playing. I made this app to find streamers I wouldn't normally watch hoping to find new
                    people to watch or explore games I don't usually play.</p>
            <div className="project-icons">
              <i className="fab fa-react fa-3x"></i>
              <i className="fab fa-sass fa-3x"></i>
              <i className="fab fa-twitch fa-3x"></i>
              <i className="fab fa-js-square fa-3x"></i>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/Danex2/twitchy" className="project-link" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://twitchyapp.herokuapp.com" className="project-link" target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
        </div>
        <div className="project-item-container-3">
          <div className="project-item">
            <img src={TwitchyIMG} alt="Twitchy react app project" />
          </div>
          <div className="project-item-description">
            <h1>Twitchy</h1>
            <p>A react app that searches for random twitch.tv streamers based on the amount of viewers or the game
                they are playing. I made this app to find streamers I wouldn't normally watch hoping to find new
                    people to watch or explore games I don't usually play.</p>
            <div className="project-icons">
              <i className="fab fa-react fa-3x"></i>
              <i className="fab fa-sass fa-3x"></i>
              <i className="fab fa-twitch fa-3x"></i>
              <i className="fab fa-js-square fa-3x"></i>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/Danex2/twitchy" className="project-link" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://twitchyapp.herokuapp.com" className="project-link" target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
  </div>*/}
      </div>
    </React.Fragment>
  )
}

export default Projects
