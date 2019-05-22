import React from "react";
import TwitchyIMG from "../images/twitchy.png";
import WCIMG from '../images/wg.png'

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
        <div className="project-item">
          <img src={WCIMG} alt="Warcraft guilds react project" />
          <h3 className="project-title">Twitchy</h3>
          <p className="project-desc">
            This is a website for people looking for a guild in the game World of Warcraft. I always found that the forums weren't that great for looking for guilds so
            I made this to make it easier to quickly find a guild to join.
          </p>
          <p className="project-links" style={{ fontWeight: "bold" }}>
            <a
              href="https://github.com/Danex2/warcraftguilds"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            |{" "}
            <a
              href="https://warcraftguilds.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </p>
          <p style={{ fontWeight: "bold" }}>
            Made with: React, Bootstrap, Express
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
