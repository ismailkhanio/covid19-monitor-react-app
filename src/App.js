import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import style from './App.module.css'
import {fetchData} from './api'

export default class App extends Component {
  
  async componentDidMount() {
    const data = await fetchData()
    console.log(data);
  }

  render() {
    return (
      <div className={style.container}>
        <h1>App</h1>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}
