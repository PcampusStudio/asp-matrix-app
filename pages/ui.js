import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div className={styles.container}>
      <Head>
        <title>Components Overview - Powered by ASP-MATRIX</title>
        <meta name="description" content="Components Overview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Components Overview
        </h1>
        <div className={styles.description}>RESTful Web Services with Node.js and Express</div>

        <div className={styles.grid}>
          <a href="/api/hello" className={styles.card}>
            <h2>API Web Services</h2>
            <p>https://lab.asp-matrix.com/api/hello</p>
          </a>

          <a href="/ui" className={styles.card}>
            <h2>Components Overview</h2>
            <p>https://lab.asp-matrix.com/ui</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://asp-matrix.com"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="ASP Matrix" width={72} height={16} /> */}
            <b>ASP-MATRIX.com</b>
          </span>
        </a>
      </footer>
    </div>
  )
}
