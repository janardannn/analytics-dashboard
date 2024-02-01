import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../App";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto"

export default function SectorVsIntensity() {
    const [rawData, setRawData] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_URL + "/sectorvsintensity", {
                headers: { 'Content-Type': 'application/json' }
            })
            // console.log(data.data)
            setRawData(data.data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (rawData) {
            const randomColors = Array.from({ length: 97 }, () => { let c; do { c = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}` } while ((parseInt(c.substr(1, 2), 16) * 299 + parseInt(c.substr(3, 2), 16) * 587 + parseInt(c.substr(5, 2), 16) * 114) / 1000 < 50); return c; })

            // const randomColors = Array.from({ length: 97 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`)
            // console.log(rawData.map(data => data.sector))

            setChartData({
                labels: rawData.map(data => data.sector),
                datasets: [{
                    label: "Sector VS Intensity",
                    data: rawData.map(data => data.intensity),
                    // data: rawData.map(data => data.value)
                    backgroundColor: randomColors
                }]

            })
        }

    }, [rawData])

    return (
        chartData ? <Doughnut data={chartData} /> : <div />
    )
}