import React from 'react'

import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <div className={styles.padding} id = "experience">
        <section className = {styles.container} id = "experience">
            <h2 className = {styles.title}>Experience</h2>
            <div className = {styles.content}>
                <div className = {styles.skillsSection}>
                    <h3 className = {styles.subtitle}>Skills & Technologies</h3>
                    <div className = {styles.skills}>{
                    skills.map((skill, id) => {
                        return <div key={id} className = {styles.skill}> 
                            <div className = {styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                            <p>{skill.title}</p>
                        </ div>
                    })
                    }</div>
                </div>
                <div className = {styles.historySection}>
                    <h3 className = {styles.subtitle}>Work History</h3>
                    <ul className = {styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className = {styles.historyItem}>
                                <div className = {styles.historyItemHeader}>
                                    <img src= {getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organization} Logo`} />
                                    <div className = {styles.historyItemDetails}>
                                        <h3>
                                            {`${historyItem.role}, ${historyItem.organization}`}
                                        </h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    </div>
                                </div>
                                <ul className = {styles.historyItemExperiences}>{historyItem.experiences.map((experience, id) => {
                                    return <li key = {id}>{experience}</li>
                                })}</ul>
                            </li>
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}
