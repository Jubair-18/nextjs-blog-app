import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Cards from '../components/Cards'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState('')

  useEffect(() => {
  const userInfo = Cookies.get('userInfo')
  setUser(userInfo)
}, [])

  return (
        <div className={styles.container}>
            <Nav user={user}/>
            <Cards />
        </div>
  )
}

