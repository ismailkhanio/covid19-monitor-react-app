import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import style from './App.module.css'

export default class App extends Component {
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
