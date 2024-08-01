import React from 'react'
import styles from './Myprojects.module.css'
import Carddata from './Carddata'
import Myprojects from './Myprojects'

const Projectdata = () => {
  return (
    <>
   <div className={styles['work-container']}>
        <h1 className={styles.heading}>Projects</h1> 
        <div className={styles['project-container']}>
          {Carddata.map((item, index) => {
            return (
              <Myprojects
                key={index}
                title={item.title}
                img={item.img}
                p={item.p}
                view={item.view}
                source={item.source}
              />)
    })}
  </div>    
  </div>
</>
  )
}

export default Projectdata
