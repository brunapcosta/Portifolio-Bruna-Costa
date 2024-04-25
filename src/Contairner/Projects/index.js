import React from 'react'

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
          <a href='https://portifolio-bruna-costa.vercel.app/'>Home</a>
          <a href='https://portifolio-bruna-costa.vercel.app/sobremim'>Sobre Mim</a>
          <a href='https://portifolio-bruna-costa.vercel.app/projetos'>Projetos</a>
          <a href='https://portifolio-bruna-costa.vercel.app/contato'>Contato</a>
        </Header>
      </ContainerItems>
      <H1>Projetos</H1>
    </Container>
  )
}

export default Projects
