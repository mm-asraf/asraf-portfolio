import React from "react"
import {
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaHackerrank,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mm-asraf"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/mahboob11/"
            >
              <FaHackerrank />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mahboob-asraf/"
            >
              <FaLinkedinIn />
            </a>
          </li>
       
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mahboob_asraf"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      )}
      <h2>{title}</h2>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
