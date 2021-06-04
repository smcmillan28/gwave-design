import React from "react";

const styles = {
    navStyle: {
        backgroundColor: "white",
    },
    linkStyle: {
        color: "black"
    }
};

function Navbar() {
    return (
        <nav className="navbar navbar-light" style={styles.navStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/assets/just-logo.JPG" alt="logo" className="d-inline-block align-text-top" />
                </a>
                <div className="nav flex-column" style={styles.linkStyle}>
                    <a className="nav-link" href="/">home</a>
                    <a className="nav-link" href="#/about">about</a>
                    <a className="nav-link" href="#/projects">projects</a>
                    <a className="nav-link" href="#/contact">contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;