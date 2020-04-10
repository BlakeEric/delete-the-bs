import Head from 'next/head'
import React from 'react'
import AppStyles from '../components/AppStyles'
import Layout from '../components/Layout'

const FaqPage = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" type="text/css" rel="stylesheet" />
      <title>Frequently Asked Questions - Delete the Bullshit</title>
      <meta name="description" content="Frequently Asked Questions" />
      <meta name="author" content="Blake Lundquist" />
    </Head>
    <Layout>
        <h1>Faq stuff goes here</h1>
    </Layout>
    <AppStyles />
  </>
);

export default FaqPage;
