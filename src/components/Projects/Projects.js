import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tsm from "../../Assets/Projects/tsm.png";
import editor from "../../Assets/Projects/codeEditor.png";
import domiExec from "../../Assets/Projects/exec.png";
import defcy from "../../Assets/Projects/defcry.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've recently worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={domiExec}
              isBlog={false}
              title="domiExec"
              description="Level 7+ Roblox Lua Executor as well as an Internal DLL Injector build entirely in Microsoft's WinForm .NET Framework."
              link="https://github.com/domilx/domiExec"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsm}
              isBlog={false}
              title="TrackServerManager"
              description="TrackServerManager is a simple minecraft server manager made in C#

              ."
              link="https://github.com/domilx/TrackServerManager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://editor.domidev.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defcy}
              isBlog={false}
              title="Defcy"
              description="Defcy is a platformer game meant to ruin people's day. It was built with rage in mind so take caution playing this game. Made with PICO-8 and lua."
              link="https://domidev.itch.io/defcry"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
