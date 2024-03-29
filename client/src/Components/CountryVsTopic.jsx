import { useState, useEffect } from "react"
import axios from "axios"
import Select from "react-select"
import { API_URL } from "../App"
import { randomColors } from "../App"
import { Pie } from "react-chartjs-2"
import Chart from "chart.js/auto"

export default function CountryVsTopic() {
    const [rawData, setRawData] = useState();
    const [chartData, setChartData] = useState();

    const [selectOptions, setSelectOptions] = useState([])
    const [current, setCurrent] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(API_URL + "/countryvstopic", {
                headers: { 'Content-Type': 'application/json' }
            })
            // console.log(data.data)
            setRawData(data.data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (rawData) {
            // console.log()
            setSelectOptions(rawData.map(data => data.country).map(data => ({ label: data, value: data })))
            // console.log(rawData.map(data => data.region).map(data => ({ label: data, value: data }))[0])
            setCurrent(rawData.map(data => data.country).map(data => ({ label: data, value: data }))[0])
        }

    }, [rawData])

    useEffect(() => {
        if (rawData && current) {

            const data = rawData.filter(data => data.country === current.value)[0].data

            // // console.log(rawData.map(data => data.sector))
            // console.log(data.map(d => d.intensity))

            setChartData({
                labels: data.map(x => x.topic),
                datasets: [{
                    label: "Country VS Topics",
                    data: data.map(y => y.value),
                    // data: rawData.map(data => data.value)
                    backgroundColor: randomColors
                }]

            })

        }
    }, [rawData, current])

    const handleSelectorChange = (e) => {
        setCurrent(e)
    }

    return (
        <div>
            <Select options={selectOptions} value={current} onChange={handleSelectorChange} />
            {chartData ? <Pie data={chartData} /> : <div />}
        </div>
    )
}