import React from 'react';
import styles from "../styles/links.module.css"
const Links = () => {
    return (
        <div className={styles.container}>
            <a
              href="https://rexct.app/"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
            <div className={styles.web} >
            Website
                </div>
                </a>
        </div>
    );
}

export default Links;
