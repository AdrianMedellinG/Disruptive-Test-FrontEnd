import React, { useState } from "react";
import styles from "./InputInvestment.module.scss"
import { CSVLink } from "react-csv";

function InputInvestment(props) {

    const [inicial, setInicial] = useState(0);
    const interestBTCUSDT = props.BTCUSDT;
    const interestETHUSDT = props.ETHUSDT;
    let arrayFinal = [];
    let interestOnMonthETHUSDT = 0
    let interestOnMonthBTCUSDT = 0
    let currentETHUSDT = parseFloat(inicial)
    let currentBTCUSDT = parseFloat(inicial)

    for (let i = 0; i < 12; i++) {
        interestOnMonthETHUSDT = currentETHUSDT * (interestETHUSDT / 100).toFixed(2)
        interestOnMonthBTCUSDT = currentBTCUSDT * (interestBTCUSDT / 100).toFixed(2)
        currentETHUSDT += interestOnMonthETHUSDT
        currentBTCUSDT += interestOnMonthBTCUSDT
        arrayFinal.push({ Month: i + 1, "Interest Etherium": "$" + interestOnMonthETHUSDT.toFixed(2), "Accumulation Etherium": "$" + currentETHUSDT.toFixed(2), "Interest Bitcoin": "$" + interestOnMonthBTCUSDT.toFixed(2), "Accumulation Bitcoin": "$" + currentBTCUSDT.toFixed(2) })
    }


    const headers = [
        { label: "Months", key: "Month" },
        { label: "Interest Etherium", key: "Interest Etherium" },
        { label: "Accumulation Etherium", key: "Accumulation Etherium" },
        { label: "Interest Bitcoin", key: "Interest Bitcoin" },
        { label: "Accumulation Bitcoin", key: "Accumulation Bitcoin" },
    ];

    const csvReport = {
        data: arrayFinal,
        headers: headers,
        filename: 'Interest.csv'
    };

    return (
        <div className={styles.inputForm}>
            <div>
                <form >
                    <input type="number" min="1" name="investment" placeholder='Enter amount for investment' onChange={(e) => setInicial(e.target.value)} />
                </form>
            </div>

            <CSVLink {...csvReport} >Export to CSV</CSVLink>
            <div>
                <table className={styles.tables}>
                    <tr key={"header"} className={styles.trName}>
                        {Object.keys(arrayFinal[0]).map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                    {arrayFinal.map((item) => (
                        <tr key={item}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default InputInvestment;