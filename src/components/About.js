import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.png"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
       
        <div className="about">
          <div className="about-details">
            <p>
              Hey! there, I'm Mohammad Mahboob Asraf, A Passionate
              Full Stack Web Developer having lots of knowledge for building 
              web applications with javascript / Reactjs / Nodejs / expressjs /
              MongoDb / and some other cool UI libraries & frameworks.
              
            </p>
            <div className="about-action">
              <Button
                link="https://drive.google.com/file/d/1xD7eq2IxvbC2lPJcoxPyrZa-utOOcv1L/view?usp=sharing"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
