import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          <span>Gerenciador de tarefas</span>
          <h5>React Typescript</h5>
        </p>
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {" "}
          &copy; 2022
        </p>
        <h5>
          Developed by <span>Jailson Prado</span>
        </h5>
      </footer>
    </div>
  );
};

export default Footer;
