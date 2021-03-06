import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import style from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state
    return (
      <div className={style.container}>
        <h1>App</h1>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App
