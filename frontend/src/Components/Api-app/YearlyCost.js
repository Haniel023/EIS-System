import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Bar } from 'react-chartjs-2';

const YearlyCost = () => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    };

    const getData = Axios.get(
        `http://localhost:8080/Integration/TPSYearly`,
        {},
        config
    );

    const [costPerYearly, setcostPerYearly] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = await getData
            console.log(data.data)
            setcostPerYearly(data.data)
        }
        fetchData()
    }, [])

    const data = {
        labels: costPerYearly.map((currentYearData) => {
            return currentYearData.year;
        }),
        datasets: [
          {
            label: 'Total Cost per Year',
            data: costPerYearly.map((currentYearData) => {
                return currentYearData.total;
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
               Object.values(costPerYearly).length === 0 ?
                    ''
                    :
                    <div>
                        <Bar data={data} />
                    </div>
            }
        </div>
    )
}

export default YearlyCost
