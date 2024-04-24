import axios from 'axios'

const apiPortifolio = axios.create({
    baseURL: 'https://portifolio-bruna-costa-zx57.vercel.app/'
})

export default apiPortifolio