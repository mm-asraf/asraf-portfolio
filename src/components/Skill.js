import React, { useState } from "react"

import { Container, Title } from "./common"

import { skills } from "../data"

import "./skill.css"
import nodejs from "../data/image/node.svg";
import reactjs from "../data/image/react.svg";
import htmljs from "../data/image/html.svg";
import cssjs from "../data/image/css.svg";
import javascriptjs from "../data/image/javascript.svg";
import reduxjs from "../data/image/redux.svg";
import gitjs from "../data/image/git.svg";
import postmanjs from "../data/image/postman.svg";
import mongodbjs from "../data/image/mongodb.svg";
import herokujs from "../data/image/heroku.svg";
import verceljs from "../data/image/vercel.svg";
import materialjs from "../data/image/material.svg";
const Skill = () => {
  const skillsName = Object.keys(skills)
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0])
  const selectedSkills = skills[selectedSkill]
  return (
    <div id="skill" className="skill-area">
      <Container>
        <Title title="My Skills" />
        <div className="skills">
          {/* <ul className="skill-nav"> */}
            {/* {skillsName.map(name => (
              <li
                onClick={() => setSelectedSkill(name)}
                className={name === selectedSkill ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))} */}
          {/* </ul> */}
          <div className="skill">
            <div id="react">
              <img src={reactjs}></img>
              <h4>React</h4>
            </div>
            <div id="node">
              <img src ={nodejs}></img>
              <h4>Node</h4>
            </div>

            <div id="js">
              <img src={javascriptjs} alt="Node_logo"></img>
              <h4>JavaScript</h4>
            </div>

            <div id="css">
              <img src={cssjs} alt="Node_logo"></img>
              <h4>CSS</h4>
            </div>

            <div id="html">
              <img src={htmljs} alt="Node_logo"></img>
              <h4>HTML</h4>
            </div>

            <div id="mongo">
              <img src={mongodbjs} alt="Node_logo"></img>
              <h4>MongoDB</h4>
            </div>

            <div id="redux">
              <img src={reduxjs} alt="redux_logo"></img>
              <h4>Redux</h4>
            </div>

            <div id="git">
              <img src={gitjs} alt="Node_logo"></img>
              <h4>Git</h4>
            </div>

            <div id="heroku">
              <img src={herokujs} alt="Node_logo"></img>
              <h4>Heroku</h4>
            </div>

            <div id="vercel">
              <img src={verceljs} alt="Node_logo"></img>
              <h4>Vercel</h4>
            </div>

            <div id="postman">
              <img src={postmanjs} alt="Node_logo"></img>
              <h4>Postman</h4>
            </div>

            <div id="material">
              <img src={materialjs} alt="Node_logo"></img>
              <h4>Material-UI</h4>
            </div>
            
            
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Skill }
