import axios from 'axios'

const jobAPI = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

const removeUndefinedQuery = (queryObject = {}) => {
  const obj = Object.keys(queryObject).map(function (key) {
    if (queryObject[key]) {
      return `${key}=${queryObject[key]}`
    } return null
  }).filter(item => item).join("&");
  return obj
}

export default ({
  getJobs: (queryParams) => jobAPI.get(`?${removeUndefinedQuery(queryParams)}`),
  selectJob: (jobId) =>  {
    return jobAPI.get(`/${jobId}`)
  }
  
})