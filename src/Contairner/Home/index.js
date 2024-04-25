import React from 'react'
// import { useForm } from "react-hook-form"

// import DevImg from '../../assets/developer2.png'
// import Button from '../../Components/Button'
// import apiCodeBurger from '../../services/api'
import {
  Container,
  ContainerItems,
  Header,
  H1
} from './styles'

function Home() {
  return (
    <Container>
      <ContainerItems>
        <Header>
          <H1>Bruna Costa</H1>
          <a className='routes' href='https://portifolio-bruna-costa.vercel.app/'>Home</a>
          <a className='routes' href='https://portifolio-bruna-costa.vercel.app/sobremim'>Sobre Mim</a>
          <a className='routes' href='https://portifolio-bruna-costa.vercel.app/projetos'>Projetos</a>
          <a className='routes' href='https://portifolio-bruna-costa.vercel.app/contato'>Contato</a>
        </Header>
      </ContainerItems>
    </Container>
  )
}

export default Home
