import Head from 'next/head'
import type { NextPage } from 'next'
import { useFormik } from 'formik'

import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import { CommonTitle } from '../styles/global'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import AddPhoto from '../components/plantinhas/AddPhoto'

const PlantinhaDetail: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      plantNickname: '',
      plantScientificName: '',
      waterEach: '',
      lastTimeWatered: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <>
      <Head>
        <title>Plantinha Detail</title>
      </Head>
      <Layout>
        <CommonTitle>Adicionar Plantinha</CommonTitle>
        <AddPhoto />
        <Container marginTop>
          <form onSubmit={formik.handleSubmit}>
            <Input
              type='text'
              name='plantNickname'
              value={formik.values.plantNickname}
              setValue={formik.handleChange}
              placeholder='Apelido da planta'
            />
            <Input
              type='text'
              name='plantScientificName'
              value={formik.values.plantScientificName}
              setValue={formik.handleChange}
              placeholder='Nome científico'
            />
            <Input
              type='text'
              name='waterEach'
              value={formik.values.waterEach}
              setValue={formik.handleChange}
              placeholder='Regar a cada'
            />
            <Input
              type='text'
              name='lastTimeWatered'
              value={formik.values.lastTimeWatered}
              setValue={formik.handleChange}
              placeholder='Última vez regada'
            />
            <Button text='Salvar' type='submit' />
          </form>
        </Container>
      </Layout>
    </>
  )
}
export default PlantinhaDetail
