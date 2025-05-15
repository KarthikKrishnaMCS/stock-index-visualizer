import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartDisplay = ({data}) => {
    const chartData = {
        labels: data.map(row => row.index_date),
        datasets: [
            {
                label: 'Close Price',
                data: data.map(row => parseFloat(row.closing_index_value)),
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            }
        ]
    }
    return <Line data={chartData}/>
}

export default ChartDisplay
