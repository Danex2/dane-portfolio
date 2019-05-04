import React from "react";
import TwitchyIMG from "../images/twitchy.png";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-item">
          <img src={TwitchyIMG} alt="Twitchy app react project" />
          <h3 className="project-title">Twitchy</h3>
          <p className="project-desc">
            I'm always looking for new twitch streamers to watch so I made an
            app that randomly selects a streamer based on the game and amount of
            viewers.
          </p>
          <p className="project-links" style={{ fontWeight: "bold" }}>
            <a
              href="https://github.com/Danex2/twitchy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            |{" "}
            <a
              href="https://twitchyapp.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </p>
          <p style={{ fontWeight: "bold" }}>
            Made with: React, Materialize, SASS, Twitch API, Webpack
          </p>
        </div>
        {/*<div className="project-item">
          <img src={TwitchyIMG} />
          <h3 className="project-title">Some project</h3>
          <p className="project-desc">Some description</p>
          <p>Made with: React, Bootstrap, Express</p>
        </div>
        <div className="project-item">
          <img src={TwitchyIMG} />
          <h3 className="project-title">Some project</h3>
          <p className="project-desc">Some description</p>
          <p>Made with: React, Materialize, Twitch API</p>
        </div>*/}
      </div>
    </div>
  );
}

export default Projects;
