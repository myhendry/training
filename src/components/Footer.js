import React from "react";

const Footer = props => {
  return (
    <div style={styles.footerContainer}>
      <p style={styles.footerText}>{props.author}</p>
    </div>
  );
};

const styles = {
  footerContainer: {
    display: "flex",
    height: 30,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center"
  },
  footerText: {
    color: "white"
  }
};
export default Footer;
