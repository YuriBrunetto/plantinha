import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/common/Container'

import Layout from '../components/common/Layout'
import TasksForToday from '../components/home/TasksForToday'
import { CommonTitle } from '../styles/global'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Plantinha</title>
    </Head>
    <Layout>
      <CommonTitle>Bom dia, Yuri!</CommonTitle>
      <Container
        title='Tarefas do dia'
        description='Deslize para direita para completar'
        marginTop
      >
        <TasksForToday />
      </Container>
    </Layout>
  </>
)

export default Home
