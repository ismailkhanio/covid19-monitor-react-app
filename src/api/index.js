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

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${BASE_API_URL}/daily`)

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))

    return modifiedData
  } catch (error) {
    
  }
}
