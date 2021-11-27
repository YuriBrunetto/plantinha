import type { NextPage } from 'next'
import Head from 'next/head'
import moment from 'moment'
import { motion } from 'framer-motion'
import 'moment/locale/pt-br'

import Container from '../components/common/Container'
import Layout from '../components/common/Layout'
import TasksForToday from '../components/home/TasksForToday'
import { CommonTitle } from '../styles/common'

const now = moment().format('DD MMMM')

const Home: NextPage = () => (
  <motion.div exit={{ opacity: 0 }}>
    <Head>
      <title>Plantinha</title>
    </Head>
    <Layout>
      <CommonTitle>Bom dia, Yuri!</CommonTitle>
      <Container
        title='Tarefas do dia'
        description='Deslize para direita para completar'
        date={now}
        marginTop
      >
        <TasksForToday />
      </Container>
    </Layout>
  </motion.div>
)

export default Home
