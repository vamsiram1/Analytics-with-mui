import React from "react";
import logo from "../../assets/sclogo.png";
import styles from "./LogoComponent.module.css";

const LogoComponent = () => {
  return (
    <figure className={styles.sc_image}>
      <img src={logo} className={styles.sclogo} alt="School Logo" />
    </figure>
  );
};

export default LogoComponent;
