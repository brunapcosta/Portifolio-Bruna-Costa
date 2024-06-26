import React from 'react'

import {
    Container,
    Me,
    ContainerItems,
    Header
} from './styles'

function AboutMe() {
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
                {/* <PerfilImage src={PerfilImg} alt='perfil-image' /> */}
                <Me>
                    <h1>Sobre Mim</h1>
                    <p className='p1'>
                        Eu participei da Missão Programação do Zero,
                        <br />
                        do desenvolvedor FullStack Rodolfo Mori,
                        <br />
                        e decidi trabalhar na área da programação.
                    </p>
                    <br />
                    <p className='p2'>
                        Já tenho domino de ferramentas como HTML,
                        <br />
                        CSS, JavaScript, ReactJS, NodeJS.
                        <br />
                        No momento, estou no modulo Jornada
                        <br />
                        FulStack do Cruso DevClub do Rodolfo Mori.
                    </p>
                        <br />
                    <p className='p3'>
                        Meu objetivo é me tornar uma programadora
                        <br />
                        Full Stack dominando tanto o Front-End,
                        <br />
                        quanto o Back-End.
                    </p>
                </Me>
        </Container>
    )
}

export default AboutMe