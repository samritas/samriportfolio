import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there <span className="purple">Samri  </span> here.
            Live in <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />I'm a computer science senior year student at Unity University.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Listing Musics
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What you need to learn isn't how to make everything easy, but what to do when something is hard"{" "}
          </p>
          <footer className="blockquote-footer">Silvia, 12th July, 2022</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
