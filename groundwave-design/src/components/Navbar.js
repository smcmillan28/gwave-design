import React from "react";

const styles = {
    navStyle: {
        backgroundColor: "white"
    }
};

function Navbar() {
    return (
        <nav class="navbar navbar-light" style={styles.navStyle}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/assets/just-logo.JPG" alt="logo" class="d-inline-block align-text-top" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;