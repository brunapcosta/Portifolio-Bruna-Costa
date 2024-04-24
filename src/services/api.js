import axios from 'axios'

const apiPortifolio = axios.create({
    baseURL: 'http://localhost:3000'
})

export default apiPortifolio