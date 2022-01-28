import React from 'react';
import styles from './card.module.css'

export default function Card({data}) {
    const photo = data.Photo.data.attributes
    console.log(photo)
  return(  <a href="https://nextjs.org/docs" className={styles.card}>
  <h3>{data.Name}&rarr;</h3>
  <div className={styles.imgContainer}>
  <img className={styles.imgCard} src={"http://localhost:1337"+photo.url}></img>
  </div>
  <p>{truncate(data.Bio)}</p>
</a>) 

}

const truncate = (str) =>
{
    return(str.length > 10 ? str.substring(0, 90) + "..." : str)
}