import React from 'react';
import styles from "../styles/social.module.css"
import { FaInstagram } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
import { FaDiscord} from 'react-icons/fa';

const Social = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconholder}>
            <a
              href="https://www.instagram.com/ivoinetech/"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
        <FaInstagram  className={styles.icon}/>
        </a>
        <a
              href="https://github.com/sikethedev"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
        <FaGithub className={styles.icon}/>
        </a>
        <a
              href="https://www.linkedin.com/in/ivoine-strachan-92a902216/"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
        <FaLinkedin className={styles.icon}/>
        </a>
        <a
              href="https://discordapp.com/users/505373999904194560"
              rel="noreferrer"
              target="_blank"
              style={{ color: "black" }}
            >
        <FaDiscord className={styles.icon}/>
        </a>
            </div>
        <div className={styles.hand}>
            <div className={styles.wave}>
            👋🏾
            </div>
            </div>
        </div>
    );
}

export default Social;
