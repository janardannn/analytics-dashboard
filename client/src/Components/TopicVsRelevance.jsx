import { useState, useEffect } from "react"
import axios from "axios"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { API_URL } from "../App"

export default function TopicVsRelevance() {
    const [rawData, setRawData] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_URL + "/topicvsrelevance", {
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
            //
            // console.log(bubbleData)

            setChartData({
                labels: rawData.map(data => data.topic),
                datasets: [{
                    label: "Topic VS Relevance",
                    data: rawData.map(data => data.relevance),
                    // data: rawData.map(data => data.value)
                }]

            })
        }

    }, [rawData])

    return (
        chartData ? <Line data={chartData} /> : <div />
        // <div></div>
    )
}