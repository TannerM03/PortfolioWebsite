import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className = {styles.padding} id = "about">
        <section className = {styles.container}>
            <h2 className = {styles.title}>About</h2>
            <div className = {styles.content}>
                <img className = {styles.aboutImg} src={getImageUrl("about/headshotinformal.jpg")} alt="Beach headshot" />
                <ul className = {styles.aboutItems}>
                    <li className = {styles.aboutItem}>
                        {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" /> */}
                        <div className = {styles.aboutItemText}>
                            <h3>Where it started</h3>
                            <p>My interest in Computer Science first began during my sophomore year of high school, 
                                simply because I enjoyed phone games and wanted to learn how to create one myself</p>
                        </div>
                    </li>
                    <li className = {styles.aboutItem}>
                        {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" /> */}
                        <div className = {styles.aboutItemText}>
                            <h3>Where it's come</h3>
                            <p>In the last few years, I've turned my dream into a reality not only by becoming skilled in 
                                iOS/fullstack devlopment, but by also discovering a sincere interest in Machine Learning</p>
                        </div>
                    </li>
                    <li className = {styles.aboutItem}>
                        {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" /> */}
                        <div className = {styles.aboutItemText}>
                            <h3>What else?</h3>
                            <p>Aside from programming, some of my hobbies include surfing, snowboarding, running, and playing the guitar</p>
                        </div>
                    </li>
                </ul>
                </div>
            </section>
        </section>
  )
}
