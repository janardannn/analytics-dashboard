import axios from "axios";
import { useEffect, useState } from "react"
import { Bar, Bubble, Line } from "react-chartjs-2"
import { API_URL } from "../App";
import { randomColors } from "../App";
import Chart from "chart.js/auto"

export default function TopicVsLikelihood() {
    const [rawData, setRawData] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_URL + "/topicvslikelihood", {
                headers: { 'Content-Type': 'application/json' }
            })
            // console.log(data.data[0])
            setRawData(data.data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (rawData) {
            // const topics = rawData.map(data => data.topic)
            // const values = rawData.map(data => data.value)

            // const bubbleData = topics.map((topic, index) => ({
            //     x: index,
            //     y: values[index],
            //     r: values[index] * 1.5
            // }))

            // console.log(bubbleData)

            setChartData({
                labels: rawData.map(data => data.topic),
                datasets: [{
                    label: "Topic VS Likelihood",
                    data: rawData.map(data => data.value),
                    // data: rawData.map(data => data.value)
                    backgroundColor: randomColors
                }]

            })
        }

    }, [rawData])

    // const options = {
    //     scales: {
    //         x: {
    //             ticks: {
    //                 beginAtZero: true,
    //             },
    //         },

    //     },
    // }

    return (
        chartData ? <Bar data={chartData} /> : <div />
        // <div></div>
    )
}