import React from 'react';
import styles from './card.module.css'
import Link from 'next/link'


export default function Card({data, id, fullSize}) {

  const photo = data.Photo.data.attributes


  if(fullSize){
    return(  
      <Link className={styles.link} href={`/characters/${id}`}>
      <div className={styles.fullCard}>
      <h3>{data.Name}&rarr;</h3>
      <div className={styles.imgContainer}>
      <img className={styles.fullimgCard} src={"http://localhost:1337"+photo.url}></img>
      </div>
      <p>{data.Bio}</p>
      </div>
    </Link>) 
    
    }

  else{
    return(  
      <Link className={styles.link} href={`/characters/${id}`}>
      <div className={styles.card}>
      <h3>{data.Name}&rarr;</h3>
      <div className={styles.imgContainer}>
      <img className={styles.imgCard} src={"http://localhost:1337"+photo.url}></img>
      </div>
      <p>{truncate(data.Bio, 90)}</p>
      </div>
    </Link>) 
    
    }
  }
const truncate = (str, max) =>
{
    return(str.length > 10 ? str.substring(0, max) + "..." : str)
}