import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <div><Link to="/" className={styles.linkNav}><img className={styles.imgSize} src='./img/logo.png' alt='logo'></img></Link></div>
    </nav>
  )
}

export default Navbar