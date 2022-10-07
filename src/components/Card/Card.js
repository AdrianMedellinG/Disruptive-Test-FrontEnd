import React from 'react'
import axios from "axios";
import styles from './Card.module.scss';
import InfoSectionTitle from "../InfoSectionTitle/InfoSectionTitle";


function Card(props) {
  const [cards, setCards] = React.useState(null);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get(`https://api.binance.com/api/v3/avgPrice?symbol=${props.coin}`).then((response) => {
        setCards(response.data);
      });
    }, 1000)

    return () => clearInterval(intervalId);

  }, [props.coin]);

  if (!cards) return ("Loading");

  return (
    <div className={styles.cards}>
      <div className={styles.coinCard} key={props.coin}>
        <img className={styles.imgSize} src={`./img/${props.coin}.png`} alt={props.coin}></img>
        <div className={styles.info}>
          <InfoSectionTitle coinSymbol={props.coin} title="Current Value" result={cards.price} interest={props.coinInterest} />
        </div>
      </div>
    </div>
  );
}

export default Card;