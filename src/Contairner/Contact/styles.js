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

export const BusinessCard = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        color: #FFFFFF;
        align-self: center;
    }
`

export const SocialMedias = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-content: center;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; */

    
    .linkedin{
        height: 35px;
        width: 35px;
        margin-left: 130px;
        margin-top: 54px;
        background-color: #FFFFFF;
        /* filter: opacity(0.5) drop-shadow(0 0 0 blue); */
    }

    .github{
        height: 34px;
        width: 48px;
        margin-left: 130px;
        margin-top: 54px;
        background-color: #FFFFFF;

    }

    .gmail{
        height: 36px;
        width: 40px;
        margin-left: 130px;
        margin-top: 54px;
    }

    .whatsapp{
        height: 38px;
        width: 44px;
        margin-left: 166px;
        margin-top: 54px;
    }

    a{
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        text-decoration: none;
            &:hover{
            opacity: 0.5;
            }
            &:active{
                opacity: 0.8;
            }
        }
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
            font-size: 18px;

            &:hover{
                opacity: 0.8;
                color: #1BB582;
                background: radial-gradient(black, transparent);
            }
            &:active{
                opacity: 0.5;
                background: radial-gradient(black, transparent);
            }
        }
`
