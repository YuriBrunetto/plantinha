import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/common/Layout'
import PlantinhasList from '../components/plantinhas/PlantinhasList'
import { CommonTitle } from '../styles/global'

const Plantinhas: NextPage = () => (
  <>
    <Head>
      <title>Plantinhas</title>
    </Head>
    <Layout>
      <CommonTitle>Plantinhas</CommonTitle>
      <PlantinhasList />
    </Layout>
  </>
)

export default Plantinhas
