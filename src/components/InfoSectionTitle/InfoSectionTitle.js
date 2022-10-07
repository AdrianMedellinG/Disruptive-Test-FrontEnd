import React from 'react'
import styles from './InfoSectionTitle.module.scss';
function InfoSectionTitle(props) {
    
    return (
        <div className={styles.infoSection}>
            <div className={styles.infoSectionTitle}>
                <h2 className={styles.title}>{props.coinSymbol}</h2>
                <div className={styles.interestAmount}><h3 className={styles.interest}>+{props.interest}%</h3><span className={styles.interestSpan}>Interest</span></div> 
            </div>
           
            <span className={styles.status}>{props.title}</span>
            <div className={styles.title}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.result) }</div>
        </div>

    );
}

export default InfoSectionTitle;