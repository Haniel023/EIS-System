import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Bar } from 'react-chartjs-2';

const MonthlyCost = () => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };

    const getData = Axios.get(
        `${process.env.REACT_APP_API_URL}/Integration/TPSMonthly`,
        {},
        config
    );

    const [costPerMonth, setCostPerMonth] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = await getData
            console.log(data.data)
            setCostPerMonth(data.data)
        }
        fetchData()
    }, [])

    const data = {
        labels: costPerMonth.map((currentMonthlyData) => {
            return currentMonthlyData.month;
        }),
        datasets: [
          {
            label: 'Total Cost per Month',
            data: costPerMonth.map((currentMonthlyData) => {
                return currentMonthlyData.total;
            }),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div>
            {
               Object.values(costPerMonth).length === 0 ?
                    ''
                    :
                    <div>
                        <Bar data={data} />
                    </div>
            }
        </div>
    )
}

export default MonthlyCost
