import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import Cookies from 'js-cookie'
function register(){
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        // post structure
        let user = {
            name,
            email,
            password
        };
        // save the post
        let response = await fetch('https://nextjs-blog-app-pi.vercel.app/api/register', {
            method: 'POST',
            body: JSON.stringify(user),
        });
  
        // get the data
        let data = await response.json();
  
        if (data.success) {
            alert("register successfully")

            Cookies.set('userInfo', data.token);
            Router.push('/')
        } else {
          alert(data.message)
        }
    };
    

  return (
    <div className={styles.createContainer}>
        <div className={styles.createItems}>
            <h2 className={styles.createHeading}>
                Register
            </h2>
            <div>
                <div className={styles.input}>
                        <label> Enter Your Name ...</label>
                        <textarea className={styles.headingArea} type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label> Enter Your email ...</label>
                        <textarea className={styles.headingArea} type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label> Enter Your Password ...</label>
                        <textarea className={styles.headingArea} cols="40" rows="5" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className={styles.button} onClick={handleSubmit}>Register</button>       
            </div>
        </div>
    </div>
  )
}

export default register