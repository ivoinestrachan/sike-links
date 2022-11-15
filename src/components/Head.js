import React from 'react';
import Logo from "../assets/jake.gif";
import styles from "../styles/head.module.css";
import { GoVerified } from "react-icons/go";


const Head = () => {
    return (
        <div className={styles.container} >
          <div className={styles.logo}>
          <img src={Logo} alt="logo"   style={{width: 130, height: 130, borderRadius: 130/ 2}} />
         </div>  
         <div className={styles.name}>Ivoine Strachan <GoVerified  className={styles.verify}/>   </div>
         <div className={styles.dev}>
             I am a developer!
         </div>
<div className={styles.friends}>Make sure to Join <span><a href='https://www.urbancirclesf.com/'>@urbansf</a></span></div>
        </div>
    );
}

export default Head;
