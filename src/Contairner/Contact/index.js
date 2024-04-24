import React from 'react'

// import { useForm } from "react-hook-form"

import GitHub from '../../assets/github2.png'
import Gmail from '../../assets/gmail.png'
import Linkedin from '../../assets/linkedin.png'
import WhatsApp from '../../assets/whatsapp.png'
// import PerfilImg from '../../assets/perfil.png'
// import Button from '../../Components/Button'
// import apiCodeBurger from '../../services/api'
import {
  Container,
  BusinessCard,
  ContainerItems,
  Header,
  SocialMedias
} from './styles'

function Contact() {
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
      <BusinessCard>
        <h1>Contato</h1>
        <SocialMedias>
          <a href='https://wa.me/555181713115' target="_blank" rel="noreferrer">
            <img className='whatsapp' src={WhatsApp} alt='logo-whatsapp' />
          </a>
          <img className='gmail' src={Gmail} alt='logo-outlook' />
          <p><a href='mailto:brunapadidacosta@gmail.com' target="_blank" rel="noreferrer">brunapadidacosta@gmail.com</a></p>
          <img className='github' src={GitHub} alt='logo-github' />
          <p><a href='https://github.com/brunapcosta' target="_blank" rel="noreferrer">brunapcosta</a></p>
          <img className='linkedin' src={Linkedin} alt='logo-linkedin' />
          <p>
            <a href='https://www.linkedin.com/in/bruna-padilha-da-costa-15828893/' target="_blank" rel="noreferrer">
              Bruna Padilha da Costa</a>
          </p>
        </SocialMedias>
      </BusinessCard>
    </Container>
  )
}

export default Contact
