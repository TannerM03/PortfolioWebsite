import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer className = {styles.container} id = "contact">
        <div className = {styles.text}>
            <h2 >Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className = {styles.links}>
            <li className = {styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:tmacp@unc.edu">tmacp@unc.edu</a>
            </li>
            <li className = {styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/tannermacpherson/">linkedin.com/tannermacpherson</a>
            </li>
            <li className = {styles.link}> 
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/TannerM03">github.com/TannerM03</a>
            </li>
        </ul>
    </footer>
  )
}
