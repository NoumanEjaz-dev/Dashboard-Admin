import React from 'react'
import styles from './transcations.module.css'
import Image from 'next/image'

const Transcations = () => {
  return (
    <div className={styles.contianer}>
      <h2 className={styles.title}>Latest Transcations</h2>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                 <div className={styles.user}>
                 <Image src="/noavatar.png"
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage} />
                  Tahir Khan
                 </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}> Pending</span></td>
                <td>14.02.2024</td>
                <td>$3.200</td>
            </tr>
            {/*  */}
            <tr>
              <td>
                <div className={styles.user}>
                <Image src="/noavatar.png"
                      alt=''
                      width={40}
                      height={40}
                      className={styles.userImage} />
                      Tahir Khan
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}> done</span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
            {/*  */}
            <tr>
              <td>
              <div className={styles.user}>
                <Image src="/noavatar.png"
                      alt=''
                      width={40}
                      height={40}
                      className={styles.userImage} />
                      Tahir Khan
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span></td>
                <td>14.02.2024</td>
                <td>$3.200</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Transcations