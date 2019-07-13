import Link from 'next/link'
import Head from 'next/head'
import css from 'styled-jsx/css'
import React from 'react'
import App from '../components/App'
import AppStyles from '../components/AppStyles'



const HomePage = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" type="text/css" rel="stylesheet" />
      <title>Real Simple Web - View the content of any webpage distraction free.</title>
      <meta name="description" content="Full-stack developer and educator. See my work, view accessible development resources, or learn to code using my free web development study guides." />
      <meta name="author" content="Blake Lundquist" />
    </Head>
    <App />
    <AppStyles />
  </div>
);

export default HomePage;
