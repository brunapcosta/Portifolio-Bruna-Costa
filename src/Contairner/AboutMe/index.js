import React from 'react'
// import { useForm } from "react-hook-form"

import PerfilImg from '../../assets/perfil.png'
// import PerfilImg from '../../assets/perfil.png'
// import Button from '../../Components/Button'
// import apiCodeBurger from '../../services/api'
import {
    Container,
    BusinessCard,
    Me,
    PerfilImage,
    ContainerItems,
    Header
} from './styles'

function AboutMe() {
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
                <PerfilImage src={PerfilImg} alt='perfil-image' />
                {/* <PerfilImage src={PerfilImg} alt='perfil-image' /> */}
                <Me>
                    <h1>Sobre Mim</h1>
                    <p>Eu participei da Missão Programação do Zero,
                        <br />
                        do desenvolvedor FullStack Rodolfo Mori,
                        <br />
                        e decidi trabalhar na área da programação.
                        <br />
                        <br />
                        Já tenho domino de ferramentas como HTML,
                        <br />
                        CSS,, JavaScript, ReactJS, NodeJS.
                        <br />
                        <br />
                        No momento, estou no modulo Jornada FulStack
                        <br />
                        do Cruso DevClub do Rodolfo Mori.
                        <br />
                        <br />
                        Meu objetivo é me tornar uma programadora Full Stack
                        <br />
                        dominando tanto o Front-End, quanto o Back-End.
                    </p>
                </Me>
            </BusinessCard>
        </Container>
    )
}

export default AboutMe