import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css';
import NextLink from 'next/link';

function Nav({ user }){

    
  return (
    <div className={styles.navContainer}>
        <div className={styles.logo}>
            <h2>Blog</h2>
        </div>
        <div>
            <ul className={styles.navLinks}>
                <li className={styles.linksItem}>
                    <NextLink href='/'>Home</NextLink>
                </li> 
                {user && 
                <li className={styles.linksItem}>
                    <NextLink href='/createPost'>create post</NextLink>
                </li>
                }   
                <li className={styles.linksItem}>
                    <NextLink href='/login'>login</NextLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav