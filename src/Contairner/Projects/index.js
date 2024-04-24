import React from 'react'
// import { useForm } from "react-hook-form"

// import Button from '../../Components/Button'
// import apiCodeBurger from '../../services/api'
import {
  Container,
  ContainerItems,
  Header,
  H1
} from './styles'

function Projects() {
  return (
    <Container>
      <ContainerItems>
        <Header>
          <a href='http://localhost:3000/'>Home</a>
          <a href='http://localhost:3000/sobremim'>Sobre Mim</a>
          <a href='http://localhost:3000/projetos'>Projetos</a>
          <a href='http://localhost:3000/contato'>Contato</a>
        </Header>
      </ContainerItems>
      <H1>Projetos</H1>
    </Container>
  )
}

export default Projects
