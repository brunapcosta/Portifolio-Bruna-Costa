import styled from 'styled-components'

// import Background from '../../assets/backgorunPurple.webp'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgb(26, 26, 78);
    background-size: cover;
    display: grid;
    grid-auto-rows: 100px 600px;
    /* align-items: center; */
`

export const H1 = styled.h1`
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 30px;
`

export const ContainerItems = styled.div`
    background: rgb(26, 26, 78);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    border-radius: 0px 10px 10px 0px;
    padding: 35px 44px;
 `

export const Header = styled.header`
        grid-row: 1, 4;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        justify-content: flex-end;
        column-gap: 40px;
        font-size: 15px;
        font-weight: 400;
        
        a{
            text-decoration: none;
            color: #FFFFFF;
            cursor: pointer;

            &:hover{
                opacity: 0.8;
            }
            &:active{
                opacity: 0.5;
            }

        }

`
