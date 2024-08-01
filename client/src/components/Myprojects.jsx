import React from 'react'
import styles from './Myprojects.module.css'
import { Link } from 'react-router-dom'

  const Myprojects = ({img, title, p, view, source}) => {
    return(
        <>
       <div className={styles.card}>
      <img src={img} alt="image" />
      <h2 className={styles['project-title']}>{title}</h2>
      <div className={styles['pro-details']}>
        <p>{p}</p>
        <div className={styles['pro-btns']}>
          <Link to={view} className="btn">View</Link>
          {source && <Link to={source} className="btn" target="_blank" rel="noopener noreferrer">Source</Link>}
        </div>
      </div>
    </div>
    </>
    )
}

  
export default Myprojects
