import { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/common/Layout'
import Header from '../components/login/Header'
import Container from '../components/common/Container'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

import { LoginWrapper, LoginFooter } from '../styles/login'
import Footer from '../components/common/Footer'

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
          <LoginWrapper>
            <Input
              name='email'
              placeholder='Seu e-mail'
              type='email'
              value={email}
              setValue={setEmail}
              required
            />
            <Input
              name='password'
              placeholder='Sua senha'
              type='password'
              value={password}
              setValue={setPassword}
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
