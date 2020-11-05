import axios from 'axios'

// fetch data from api

const BASE_API_URL = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const res = await axios.get(BASE_API_URL)

    return res
  } catch (error) {}
}
