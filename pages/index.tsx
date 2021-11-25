import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/common/Container'

import Layout from '../components/common/Layout'
import { CommonTitle } from '../styles/global'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Plantinha</title>
    </Head>
    <Layout>
      <CommonTitle>Bom dia, Yuri!</CommonTitle>
      <Container marginTop>
        <i>testando</i>
      </Container>
    </Layout>
  </>
)

export default Home
