import React from 'react';
import styles from './card.module.css'

export default function Card() {
  return(  <a href="https://nextjs.org/docs" className={styles.card}>
  <h3>Batgirl&rarr;</h3>
  <div className={styles.imgContainer}>
  <img class={styles.imgCard} src="http://localhost:1337/uploads/Batgirl_DC_Comics_f26db38d5d.jpg?updated_at=2022-01-27T22:40:13.283Z"></img>
  </div>
  <p>Find in-depth information about Next.js features and API.</p>
</a>) 

}
