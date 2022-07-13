import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function HeaderComponent() {
        return (
                <div className="shadow-md">
                        <Navbar dark expand="md" className={"container"}>
                                <NavbarBrand className="mr-auto" href="/">
                                        <img src="images/logo.png" alt="logo" className="navbar-logo" />
                                </NavbarBrand>
                                <NavbarBrand className="ml-auto" href="/">
                                        <img
                                                onClick={() => alert("this function is building")}
                                                src="images/shoppingcart.jfif"
                                                alt="cart"
                                                height="30"
                                        />
                                </NavbarBrand>
                        </Navbar>
                </div>
        );
}

export default HeaderComponent;
