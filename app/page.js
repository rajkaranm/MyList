"use client"

import { useEffect } from 'react';
import styles from './page.module.css' // Custom css file for customization
import Link from 'next/link';

export default function Home() {
  // Importing boostrap js on client side after website 
  // is rendered because we will get document is not defined error
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <h1>Welcome to MyList</h1>
        <p>Create List of Anything and Share Anywhere</p>
        <Link className='btn btn-primary' href="/login">Login</Link>
      </div>
    </>
  )
}
