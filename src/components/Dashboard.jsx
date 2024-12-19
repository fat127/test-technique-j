import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl } from "react-bootstrap";
import "../Css/Dashboard.css";
import immobilierImg from "../images/immobilier.jpg";
import MainAppBody from "./mainAppBody";

function Dashboard() {
    return (
        <>
        <div className="dashboard-navbar">
            <Navbar expand="lg" className="custom-navbar">
                <Container fluid>
                    <Navbar.Brand className="d-flex align-items-center">
                        <span className="ms-2">DesignFatima</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-content" />

                    <Navbar.Collapse id="navbar-content" className="d-flex justify-content-between">
                        <Form className="search-form mx-auto">
                            <FormControl
                                type="search"
                                placeholder="🔍 Rechercher..."
                                className="search-input"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav className="d-flex align-items-center nav-actions">
                            <NavDropdown
                                title={
                                    <div className="d-flex align-items-center">
                                        <span>Langue <i className="bi bi-translate ms-1"></i></span>
                                    </div>
                                }
                                id="language-dropdown"
                                className="language-dropdown"
                                align="end"
                            >
                                <NavDropdown.Item href="#lang/en">Anglais</NavDropdown.Item>
                                <NavDropdown.Item href="#lang/fr">Français</NavDropdown.Item>
                                <NavDropdown.Item href="#lang/es">Espagnol</NavDropdown.Item>
                            </NavDropdown>

                            <button className="notification-button">
                                <i className="bi bi-bell"></i>
                            </button>

                            <NavDropdown
                                title={
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={immobilierImg}
                                            alt="User"
                                            className="rounded-circle user-avatar"
                                        />
                                        <div className="ms-2 text-start">
                                            <strong>fatima ezzahra</strong>
                                            <small className="d-block">Administrateur</small>
                                        </div>
                                    </div>
                                }
                                id="user-dropdown"
                                className="user-dropdown"
                                align="end"
                            >
                                <NavDropdown.Item href="#user/profile">
                                    <strong>John Doe</strong> <br />
                                    <small>Administrateur</small>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#user/settings">Paramètres</NavDropdown.Item>
                                <NavDropdown.Item href="#logout">Se déconnecter</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
            <MainAppBody/>
        </>
    );
}

export default Dashboard;
