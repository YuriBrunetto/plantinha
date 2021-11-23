import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/common/Layout'
import Header from '../components/login/Header'
import Container from '../components/common/Container'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plantinha</title>
      </Head>
      <Layout>
        <Header />
        <Container />
      </Layout>
    </>
  )
}

export default Home
