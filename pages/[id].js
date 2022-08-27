import React, { useLayoutEffect, useState } from 'react'
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import { useRouter } from 'next/router'
import axios from 'axios';

function blog() {
  const [post, setPost] = useState({})
  const [deleting, setDeleting] = useState(false);
  const router = useRouter()
  const  pid  = router.query.id;

  const deletePost = async (postId) => {
        setDeleting(true);
        try {
            // Delete post
            await fetch('/api/posts', {
                method: 'DELETE',
                body: postId,
            });

            // reset the deleting state
            setDeleting(false);
            router.push('/')
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };

  useLayoutEffect(() => {
      const fetchPost = async () => {
        try {
          const  {data}  = await axios.get(`/api/${pid}`);
          setPost(data.data)
        } catch (err) {
         alert(err);
        }
    }
      fetchPost()

    
  }, [pid])
  
  return (
    <div className={styles.singleCard}>
        <Nav />
        {
          post ? 
          <div className={styles.singleCardContainer}>
            <h2 className={styles.cardHeading}>
              {post.heading}
            </h2>
            <img src={post.image} className={styles.cardImage}/>
            <h6 className={styles.cardContent}> 
              {post.paragraph}
            </h6>
            <button className={styles.button} type="button" onClick={() => deletePost(post._id)}>
                    {deleting ? 'Deleting' : 'Delete'}
            </button>
          </div> : 
          <h1> Loading Post ...</h1>
        }

    </div>
  )
}

export default blog


