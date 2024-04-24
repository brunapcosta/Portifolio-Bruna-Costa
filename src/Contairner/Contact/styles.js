import styled from 'styled-components'

// import Background from '../../assets/backgorunPurple.webp'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(69,44,99,1) 0%, rgba(131,58,180,1) 50%, rgba(147,112,219) 100%);
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
        height: 55px;
        width: 55px;
        margin-left: 130px;
        margin-top: 54px;
        filter: opacity(0.5) drop-shadow(0 0 0 blue);
    }

    .github{
        height: 54px;
        width: 68px;
        margin-left: 130px;
        margin-top: 54px;
    }

    .gmail{
        height: 56px;
        width: 60px;
        margin-left: 130px;
        margin-top: 54px;
    }

    .whatsapp{
        height: 58px;
        width: 64px;
        margin-left: 166px;
        margin-top: 54px;
    }

    p{
        display: flex;
        flex-direction: column-reverse;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        margin-left: 5px;
        margin-bottom: 12px;

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
    }
    `

export const ContainerItems = styled.div`
    background: #373737;
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
