import React, { useLayoutEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import styles from '../styles/Home.module.css';

function Cards() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {
        const fetchPost = async () => {
          try {
            setLoading(true);
            const  { data }   = await axios.get(`https://nextjs-blog-rarp2h943-jubair-18.vercel.app/api/posts`)
            setPosts(data.message);
            setLoading(false);

          } catch (err) {
           alert(err);
          }
        }
        fetchPost()
      }, [])
      if(!posts){
        setLoading(true)
      }
  return (
    <div>
        <div className={styles.cards} >
            { loading 
            ? 
              <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50%'}}> Loading ...</h1> 
            : typeof window !== undefined && 
                posts.map((post, i) => (
                  <Card post={post} key={i} />   
              ))}
        </div>
    </div>
  )
}

export default Cards
