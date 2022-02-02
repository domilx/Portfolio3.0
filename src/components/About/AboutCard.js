import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Domenico Valentino </span>
            from <span className="purple"> Montreal, Canada .</span>
            <br /> I am pursuing normal High School studies
            <br /> But I also take part in <span className="purple">FIRST Robotics Competition </span>
            <br /> In this <span className="purple">elite </span> competition, the best robotics students get
            <br /> to build, code and deploy a team robot to take part in the competion.
            <br />
            <br />
            Apart from coding, here are some things that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games with my friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacking and pen testing my server
            </li>
            <li className="about-activity">
              <ImPointRight /> Game development with Unity and C#
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
