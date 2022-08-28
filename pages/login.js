import Cookies from 'js-cookie'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'
import  Router  from 'next/router'

function login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault();
        // post structure
        let user = {
            email,
            password
        };
        // save the post
        let response = await fetch('https://nextjs-blog-rarp2h943-jubair-18.vercel.app/api/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{"Content-Type" : "application/json"}
        });
  
        // get the data
        let data = await response.json();
  
        if (data.success) {
            alert("Login successfully")

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
                Login
            </h2>
            <div>
                <div className={styles.input}>
                    <label> Enter Your Email ...</label>
                    <textarea className={styles.headingArea} type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.input}>
                    <label> Enter Your Password ...</label>
                    <textarea className={styles.headingArea} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className={styles.button} onClick={handleSubmit}>Login</button>
                <NextLink href='/register' style={{marginLeft: '1rem'}}> Not Login ?</NextLink>
            </div>
        </div>
    </div>
  )
}

export default login