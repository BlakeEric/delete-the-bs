import Head from 'next/head'
import React from 'react'
import App from '../components/App'
import AppStyles from '../components/AppStyles'
import Layout from '../components/Layout'

const HomePage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" type="text/css" rel="stylesheet" />
      <title>Delete the BS</title>
      <meta name="description" content="View the content of any webpage distraction free." />
      <meta name="author" content="Blake Lundquist" />
    </Head>
    <Layout>
      <App />
    </Layout>
    <AppStyles />
  </>
);

export default HomePage;
