import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/common/Layout'
import PlantinhasList from '../components/plantinhas/PlantinhasList'
import { CommonTitle } from '../styles/common'

const Plantinhas: NextPage = () => (
  <motion.div exit={{ opacity: 0 }}>
    <Head>
      <title>Plantinhas</title>
    </Head>
    <Layout>
      <CommonTitle>Plantinhas</CommonTitle>
      <PlantinhasList />
    </Layout>
  </motion.div>
)

export default Plantinhas
