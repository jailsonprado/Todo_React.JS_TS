import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>Gerenciador de tarefas</span>
          <h5>React Typescript</h5>
        </p>
        <p> &copy; 2022</p>
        <h5>
          Developed by <span>Jailson Prado</span>
        </h5>
      </footer>
    </div>
  );
};

export default Footer;
