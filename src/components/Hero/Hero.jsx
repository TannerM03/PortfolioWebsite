import React from 'react'
import styles from './Hero.module.css'

import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className = {styles.container}>
        <div className = {styles.content}>
            <h1 className = {styles.title}>Hi! I'm Tanner Macpherson</h1>
            <p className = {styles.description}>I'm a student at UNC Chapel Hill pursuing a B.S. in Computer Science along with a B.A. in Hispanic Studies</p>
            <a className = {styles.contactBtn} href="mailto:tmacp@unc.edu">Contact Me</a>
        </div>
        <img className = {styles.heroImg} src={getImageUrl("hero/headshot.jpg")} alt="Hero image of me" />
            <div className = {styles.tobBlur}></div>
            <div className = {styles.bottomBlur}></div>
    </section>
  )
}
