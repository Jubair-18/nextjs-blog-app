import React from 'react'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link';
function Card({ post }) {

  return (

      <div className={styles.card}>
          <NextLink href={`/${post._id}`}>
            <img src={post.image} alt="Avatar" style={{width: "30rem", position: 'relative'}} />
          </NextLink>
          <div className={styles.containerCard}>
            <h4>{post.heading}</h4> 
          </div>
        
      </div>

  )
}

export default Card