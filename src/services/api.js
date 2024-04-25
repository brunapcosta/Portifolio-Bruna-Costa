import axios from 'axios'

const apiPortifolio = axios.create({
    baseURL: 'https://portifolio-bruna-costa.vercel.app/'
})

export default apiPortifolio