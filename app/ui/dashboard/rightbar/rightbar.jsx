import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const Righbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
            <Image src="/astronaut.png" alt='' fill className={styles.bg}/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>
             Avaliable Now
          </span>
          <h3  className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span  className={styles.subtitle}>Takes 4 min to learn</span>
          <p  className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit.afsd adf sadf awsdfasdf.
          </p>
          <button className={styles.button}>
              <MdPlayCircleFilled/>
              Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
            <Image src="/astronaut.png" alt='' fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>
             Avaliable Now
          </span>
          <h3  className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span  className={styles.subtitle}>Takes 4 min to learn</span>
          <p  className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit.afsd adf sadf awsdfasdf.
          </p>
          <button className={styles.button}>
              <MdPlayCircleFilled/>
              Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Righbar