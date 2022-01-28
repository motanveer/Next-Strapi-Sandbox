import React from 'react';
import Card from './card';
import styles from './card.module.css'

export default function team({data}) {
    let characters = data.characters.data
  return <div className={styles.teamContainer}>
      <h2>{data.Name}</h2>
        <p>{data.Description}</p>
        <div className={styles.grid}>
         {characters = characters.map((character, index)=>{
             return(<Card key={index} data={character.attributes}/>)
         })}
        </div>
  </div>;

  
}

