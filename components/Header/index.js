import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

function Header () {
  return (
  <header className={styles.header}>  
    <Link href='/' className={styles.logo}>
    <span> FİLE BLOG</span>
    </Link>
    <nav>
      <Link href='https://www.celil.dev' target='_blank' >
        ABOUT
      </Link>
    </nav>
</header>
  );
}

export default Header