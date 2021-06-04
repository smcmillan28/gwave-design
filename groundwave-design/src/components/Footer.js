import React from "react";

const styles = {
    footStyle: {
        backgroundColor: "white",
        justifyContent: "center",
        height: "150px"
    }
};

function Footer() {
    return(
        <div>
            <footer className="navbar navbar-light" style={styles.footStyle}>
                <p><strong>&copy; Groundwave</strong></p>
            </footer>
        </div>
    )
};

export default Footer;