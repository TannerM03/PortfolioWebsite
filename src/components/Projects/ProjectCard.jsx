import React from 'react'
import {getImageUrl} from '../../utils';
import styles from './/ProjectCard.module.css';


export const ProjectCard = ({ project: {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className = {styles.container}>
        <img className = {styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
        <h3 className = {styles.title} >{title}</h3>
        <ul className={styles.description}>
        {description.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
        <ul className = {styles.skills} >{skills.map((skill, id) => {
            return (<li className = {styles.skill} key = {id}>{skill}</li>);
        })}
        </ul>
        <div className = {styles.links}>
          {demo && <a href={demo} className={styles.link}>Demo</a>}
          {source && <a href={source} className={styles.link}>Source</a>}
        </div>
    </div>
  )
}
