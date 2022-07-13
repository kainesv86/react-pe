import React from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";

function DashboardComponent() {
        return (
                <div className="container py-2">
                        <Navbar expand="md" className={"container"}>
                                <Collapse isOpen={true} navbar>
                                        <Nav navbar className={"dashboard"}>
                                                <NavItem className={"dashboard-title"}>CATEGORIES</NavItem>
                                                <NavItem>
                                                        <NavLink className="dashboard-link" to="/">
                                                                Lighting
                                                        </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                        <NavLink className="dashboard-link" to="/">
                                                                Bedding
                                                        </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                        <NavLink className="dashboard-link" to="/">
                                                                Bath & Shower
                                                        </NavLink>
                                                </NavItem>
                                        </Nav>
                                </Collapse>
                        </Navbar>
                </div>
        );
}

export default DashboardComponent;
