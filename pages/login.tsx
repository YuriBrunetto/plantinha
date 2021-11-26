import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useFormik } from 'formik'

import Layout from '../components/common/Layout'
import Header from '../components/login/Header'
import Container from '../components/common/Container'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

import { LoginWrapper, LoginFooter } from '../styles/login'
import Footer from '../components/common/Footer'

const Login: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <>
      <Head>
        <title>Plantinha</title>
      </Head>
      <Layout align='center'>
        <Header />
        <Container
          title='Faça login para continuar'
          description='Não tem uma conta? Registre-se agora!'
        >
          <LoginWrapper onSubmit={formik.handleSubmit}>
            <Input
              name='email'
              placeholder='Seu e-mail'
              type='email'
              value={formik.values.email}
              setValue={formik.handleChange}
              required
            />
            <Input
              name='password'
              placeholder='Sua senha'
              type='password'
              value={formik.values.password}
              setValue={formik.handleChange}
              required
            />
            <LoginFooter>
              <Link href='/'>
                <a title='Esqueci minha senha'>Esqueci minha senha</a>
              </Link>
              <Button type='submit' text='Entrar' />
            </LoginFooter>
          </LoginWrapper>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}

export default Login
