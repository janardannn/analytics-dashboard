import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../App";
import { randomColors } from "../App";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto"

export default function CountryVsIntensity() {
    const [rawData, setRawData] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_URL + "/countryvsintensity", {
                headers: { 'Content-Type': 'application/json' }
            })
            // console.log(data.data)
            setRawData(data.data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (rawData) {
            // console.log(rawData.map(data => data.sector))

            setChartData({
                labels: rawData.map(data => data.country),
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