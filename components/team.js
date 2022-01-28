import React from 'react';
import Card from './card';
import styles from './card.module.css'

export default function team() {
  return <div className={styles.teamContainer}>
      <h2>❤️ Team Ambria</h2>
        <p>
          The country of Embron. Built upon the vigor, darker times and intelligence of its past, this country is now among the most uncontrolled countries in its corner of the world.
          Their medicine, hygiene and natural resources are among its current greatest strengths. Unfortunately they lack a lot in housing and trade.
        </p>
        <div className={styles.grid}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
  </div>;

  
}

