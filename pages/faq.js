import Head from 'next/head'
import Link from 'next/link'
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
        <h1>Frequently Asked Questions</h1>
        <section>
          <strong>That's this about?</strong>
          <p>Two things: Allowing users to read content distraction-free, and revealing
          how much of the content of modern webpages is not actually valuable for the viewer.</p>
          <strong>What do you define as "bullshit"?</strong>
          <p>Ads, trackers, unnecessary graphics, external links, anything that
          does not directly add to the content of the webpage.</p>
          <strong>Couldn't some of the items listed above be "not bullshit" depending
            on the context?</strong>
          <p>Yes, this is just a demonstration.</p>
          <strong>I pasted in an article URL but not all the article's content
            was displayed. What's the deal?</strong>
          <p>Version 1 of this application scrapes and categorizes web content using a
            somewhat-buggy library. The plan is to include a more spohisticated algorithm in version 2.</p>
          <Link href="/"><a>&larr; Delete More Bullshit</a></Link>
        </section>
    </Layout>
    <AppStyles />
  </>
);

export default FaqPage;
