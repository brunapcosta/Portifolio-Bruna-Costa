import styled from 'styled-components'

// import Background from '../../assets/backgorunPurple.webp'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    /* background: linear-gradient(90deg, rgba(69, 44, 99, 1) 0%, rgba(131, 58, 180, 1) 50%, rgba(147, 112, 219) 100%); */
    background-size: cover;
    display: grid;
    grid-auto-rows: 100px 600px;
    /* align-items: center; */
`

// export const BusinessCard = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     text-align: justify;
//     justify-content: center;
//     align-items: center;
//     /* margin-left: 40px; */
//     /* justify-content: center; */
// `

export const Me = styled.div`
    margin-top: 30px;
    margin-left: 80px;
    background: rgb(54, 41, 107);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        text-align: center;
    }

    p{
        margin-top: 15px;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #FFFFFF;
        text-align: justify;
        /* padding-left: 8px; */
    }

    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; */

    /* margin-left: 120px;  */
`

// export const DevImage = styled.img`
//     height: 60%;
//     margin-top: 30px;
//     /* align-content: flex-start; */
// `

// export const PerfilImage = styled.img`
//     /* margin-left: 20px; */
//     margin-right: 80px;
//     height: 50%;
//     border-radius: 10%;
//     border: solid 2px slategrey;
// `

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