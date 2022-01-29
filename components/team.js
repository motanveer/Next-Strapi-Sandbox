import React from 'react';
import Card from './card';
import styles from './card.module.css'

export default function team({data}) {
    let team = data.attributes
    console.log(team)
    let characters = data.attributes.characters.data
  return <div className={styles.teamContainer}>
      <h2>{team.Name}</h2>
        <p>{team.Description}</p>
        <div className={styles.grid}>
         {characters = characters.map((character, index)=>{
             return(<Card key={index} id={character.id} data={character.attributes}/>)
         })}
        </div>
  </div>;

  
}

