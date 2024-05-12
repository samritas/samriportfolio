import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nilestream from "../../Assets/Projects/nilestream.png";
import pageNpen from "../../Assets/Projects/pageNpen.png";
import shega from "../../Assets/Projects/shega.png";
import eldelicios from "../../Assets/Projects/eldelicios.png";
import amazon from "../../Assets/Projects/amazon.jpg";
import netflix from "../../Assets/Projects/netflix.jpg";
import snake from "../../Assets/Projects/snake.jpg";
import leanding from "../../Assets/Projects/leanding.jpeg";
import qr from "../../Assets/Projects/qr.jpg";
import apple from "../../Assets/Projects/apple.jpg";
import CircleIcon from "@mui/icons-material/Circle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leanding}
              isBlog={false}
              title="Leander"
              description="A system to control there transaction and customers"
              Overview="A financial lending system under development, aimed at enabling lenders to manage user loans, annual income, interest payments, etc. Built with Node.js Express, MySQL, and React."
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Frontend: React
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Backend: Node.js Express
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Database: MySQL
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    User management for lenders and borrowers.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> Loan tracking with
                    annual income and interest calculations.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Administrative control over loan approval and payment
                    schedules.
                  </p>
                </div>
              }
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="A of amazon.com"
              demoLink="https://samritas.github.io/Amazon_clone/"
              Overview="An Amazon clone eCommerce website built with React, Firebase, Node.js Express, and Stripe. Features user authentication, product browsing, shopping cart, checkout process, and secure payment processing."
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Frontend: React
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Backend: Node.js Express
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Database: Firebase Firestore
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Payment: Stripe
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Firebase authentication for user management
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> Shopping cart
                    management with Stripe integration for payments.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> User account
                    management with order history."
                  </p>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="A simple snake game"
              demoLink="https://snakeegameee.netlify.app/"
              Overview="A classic Snake game implemented using HTML, CSS, and JavaScript. Players control a snake to eat food and grow longer while avoiding collisions."
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    HTML
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    CSS
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    javascrpt
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Arrow keys or swipe gestures control the snake.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Food randomly appears for the snake to eat.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> Score increases as
                    the snake eats food.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> Game ends if the
                    snake collides with walls or itself.
                  </p>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="A clone of the actual Netflix"
              demoLink="https://samritas.github.io/Netflix_clone/"
              Overview="A Netflix clone replicating the functionality of the actual Netflix platform. Built with React, TMDB movie API, and Node.js Express."
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Frontend: React
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Node.js Express
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    External API: TMDB
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Integration with TMDB API for fetching movie data.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    User authentication and profile management
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> Movie browsingand
                    filtering
                  </p>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr}
              isBlog={false}
              title="Simple QR Code Generator"
              description="QR code generator"
              sny
              demoLink="https://qrcodegeneratorrrr.netlify.app/"
              Overview="A QR Code generator created with HTML, CSS, and JavaScript. It allows users to generate QR codes for various uses such as sharing URLs, contact information, or Wi-Fi credentials. The tool provides an intuitive interface for inputting data and customizing QR code settings."
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    HTML
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    CSS
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    javascrpt
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Generates QR codes from user input (e.g., text, URL).
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> Simple UI with
                    minimalistic desig
                  </p>
                </div>
              }
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple.com home page"
              description="The apple.come home page using react"
              demoLink="https://samritas.github.io/apple_home_page/"
              Overview="A replica of an Apple page, faithfully recreating the design and functionality of an existing Apple webpage. Developed using React, HTML, CSS, and JavaScript, the project mirrors Apple's aesthetic and user experience standards"
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Frontend: React
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Mimics the design and layout of Apple's homepage.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Interactive elements such as navigation menus and image
                    carousels.
                  </p>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
