import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./styles.css";

function SidebarDefault() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" className={`l-navbar${sidebarVisible ? " show" : ""}`} id="nav-bar">
        <Navbar.Brand href="#" className="nav_logo">
          <i className="bx bx-layer nav_logo-icon"></i>
          <span className="nav_logo-name">BBBootstrap</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggleSidebar} className="header_toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav_list">
            <Nav.Link href="#" className="nav_link active">
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Dashboard</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav_link">
              <i className="bx bx-user nav_icon"></i>
              <span className="nav_name">Consultas</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav_link">
              <i className="bx bx-message-square-detail nav_icon"></i>
              <span className="nav_name">Agendamentos</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={`body-pd${sidebarVisible ? " show" : ""}`}>
        {/* Your main content here */}
      </div>
    </Container>
  );
}

export default SidebarDefault;
