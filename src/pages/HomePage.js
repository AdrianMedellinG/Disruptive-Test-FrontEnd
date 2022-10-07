import React from 'react'
import Card from "../components/Card/Card";
import InputInvestment from "../components/InputInvestment/InputInvestment"
import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <div>
        <div className={styles.coinCards}>
          <Card coin="BTCUSDT" coinInterest="5"/>
          <Card coin="ETHUSDT" coinInterest="3"/>
        </div>
        <InputInvestment BTCUSDT="5" ETHUSDT="3"/>
    </div>
  )
}

export default HomePage