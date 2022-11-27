import axios from 'axios'

const url = 'http://54.180.106.195:1200/api/v1'

const client = axios.create({
  baseURL: url
})

export default client
