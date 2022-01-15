import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hey! I am</p>
            <h1>Mohammad Mahboob Asraf</h1>
            <h3>Full Stack Web Developer</h3>
            <ul>
              <li>Software  Developer</li>
              <li>Programmer</li>
            
            </ul>
            <div className="action">
              <Button
                link="https://drive.google.com/file/d/1xD7eq2IxvbC2lPJcoxPyrZa-utOOcv1L/view?usp=sharing"
                target="__blank"
                bgColor="#00cf5d"
                title="See My Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
