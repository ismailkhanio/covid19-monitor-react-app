import axios from 'axios'

// fetch data from api

const BASE_API_URL = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(BASE_API_URL)

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }
  } catch (error) {}
}
