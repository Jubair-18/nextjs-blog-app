import React, { useState} from 'react'
import styles from '../styles/Home.module.css';
import axios from 'axios'
import Router from 'next/router';
function createPost(){

    const [heading, setHeading] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
      alert('please wait untill next message')

      // post structure
      let post = {
          heading,
          paragraph,
          image
      };
      // save the post
      let response = await fetch('https://nextjs-blog-rarp2h943-jubair-18.vercel.app/api/posts', {
          method: 'POST',
          body: JSON.stringify(post),
          headers:{"Content-Type" : "application/json"}
      });

      // get the data
      let data = await response.json();

      if (data.success) {
          alert("post added successfully")
          Router.push('/')
      } else {
        alert(Error)
      }
  };

    const uploadHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('file', file);
        try {
         setLoading(true)
          const { data } = await axios.post('https://nextjs-blog-rarp2h943-jubair-18.vercel.app/api/upload', bodyFormData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setImage(data.secure_url);
          setLoading(false)
          alert("successful")
        } catch (err) {
          console.log(err);
          setLoading(false)
        }
      };

  return (
    <div className={styles.createContainer}>
        <div className={styles.createItems}>
            <h2 className={styles.createHeading}>
                Create a post
            </h2>
            <div>

                <div className={styles.input}>
                    <label> Write a heading ...</label>
                    <textarea className={styles.headingArea} type='text' value={heading} onChange={(e) => setHeading(e.target.value)}/>
                </div>

                <div className={styles.input}>
                    <label> Write a paragraph ...</label>
                    <textarea className={styles.paragraphArea && styles.headingArea} cols="40" rows="5" value={paragraph} onChange={(e) => setParagraph(e.target.value)}/>
                </div>

                <div className={styles.input}>
                
                    <button
                        className={styles.button}
                        type="submit"
                    > {loading ? 'wait ...' : 'upload'}
                    <input type="file" onChange={uploadHandler} className={styles.imageprocess}/>
                    </button>
                </div>
                <button className={styles.button} onClick={handleSubmit}> Publish </button>
            </div>
        </div>
    </div>
  )
}

export default createPost