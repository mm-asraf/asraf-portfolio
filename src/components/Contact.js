import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-details">
            <ul>
              <li>
                 <h5>
                   <a href="mailto:mahboob.webdev.asraf@gmail.com" >

                <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
                </a>
                </h5> 
              </li>
              <li>
                <h5 style={{marginLeft: "2px"}}>
                  <a target="_blank" 
                  href="https://github.com/mm-asraf">
                <img src="https://img.icons8.com/small/48/ffffff/github.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank" 
                  href="https://www.linkedin.com/in/mahboob-asraf/">
                <img src="https://img.icons8.com/ios-glyphs/48/4a90e2/linkedin.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank"
                   href="https://www.google.com/maps/place/Giridih,+Jharkhand/@24.189846,86.2544304,13z/data=!3m1!4b1!4m5!3m4!1s0x39f155d71e2ff95d:0xa5bea10ff8ed8188!8m2!3d24.19135!4d86.2996368">
                <img src="https://img.icons8.com/external-justicon-flat-justicon/48/4a90e2/external-gps-map-and-location-justicon-flat-justicon.png"/>
                </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="contact-status">
            <p>
            I would like to work in an organization that challenges me on a daily basis and offers opportunities to enhance my technical skills, so I can grow and develop alongside the organization.Feel free to ping me.<br></br>
              Phone: +91 8825320027
              .<br></br>
              Email: mahbbob.webdev.asraf@gmail.com
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:mahboob.webdev.asraf@gmail.com"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }