import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Line } from 'react-chartjs-2';

const MonthlyInvent = () => {
    let [dataMap, setDataMap] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Inventory per Month',
                data: [],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    })

    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };

    const getData = Axios.get(
        `${process.env.REACT_APP_API_URL}/Integration/INSMonthly`,
        {},
        config
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("running")
                let dataFromAPI = await getData
                console.log(dataFromAPI.data)
                console.log("dustin")
                setDataMap((currentData) => {
                    return {
                        ...currentData,
                        datasets: [
                            {
                                ...currentData.datasets[0],
                                data: Object.values(dataFromAPI.data.count).map((currentMonth) => {
                                    return currentMonth
                                })
                            }
                        ]
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <Line data={dataMap} options={options} />
        </div>
    )
}

export default MonthlyInvent
