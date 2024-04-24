import styled from 'styled-components'

// import Background from '../../assets/backgorunPurple.webp'
import Background from '../../assets/notebookcode2.png'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${Background});
    /* background: linear-gradient(rgba(104, 247, 115, 97), rgba(29, 245, 47, 0.5)); */
    /* background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(69,44,99,1) 0%, rgba(131,58,180,1) 50%, rgba(147,112,219) 100%); */
    background-size: cover;
    display: grid;
    grid-auto-rows: 100px 600px;
    /* align-items: center; */
`

// export const DevImage = styled.img`
//     height: 60%;
//     margin-top: 30px;
//     /* align-content: flex-start; */
// `

export const ContainerItems = styled.div`
    background: transparent;
    overflow: hidden;
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
        font-weight: 500;
        
        .routes{
            margin-right: 20px;
            text-decoration: none;
            font-size: 18px;
            color: #FFFFFF;
            cursor: pointer;

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

export const H1 = styled.h1`
        margin-right: 300px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #FFFFFF;
        /* margin-left: 16px; */
        /* line-height: 28px; */
        /* margin-top: 100px; */

`
