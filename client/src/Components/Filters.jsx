import { useEffect, useState } from "react"
import Select from "react-select"
import EndYear from "./Filters/EndYear"
import Topics from "./Filters/Topics"
import Sector from "./Filters/Sector"
import Region from "./Filters/Region"
import Pestle from "./Filters/Pest"
import Source from "./Filters/Source"
import Country from "./Filters/Country"

export default function Filters({ data, setFilteredData }) {

    const [selectOptions, setSelectOptions] = useState([
        { label: "Apply Filter", value: "none" },
        { label: "End Year", value: "end_year" },
        { label: "Topics", value: "topics" },
        { label: "Sector", value: "sector" },
        { label: "Region", value: "region" },
        { label: "Pestle", value: "pestle" },
        { label: "Source", value: "source" },
        { label: "Country", value: "country" }
    ])
    const [current, setCurrent] = useState(selectOptions[0])

    const handleSelectorChange = (e) => {
        // setFilteredData([])
        setCurrent(e)
        setFilterOptions({})
        setTopics([])
        setSectors([])
        setRegions([])
        setPestles([])
        setSources([])
        setCountries([])
    }

    // const [filter, setFilter] = useState()
    const [filterOptions, setFilterOptions] = useState({})
    function handleEndYear() {
        // console.log(data.filter(x => (x.end_year >= filterOptions.from && x.end_year <= filterOptions.to)))
        setFilteredData(data.filter(x => (x.end_year >= filterOptions.from && x.end_year <= filterOptions.to)))
    }

    const [topics, setTopics] = useState([])
    function handleTopics() {
        setFilteredData(data.filter(x => topics.includes(x.topic)))
    }

    const [sectors, setSectors] = useState([])
    function handleSectors() {
        setFilteredData(data.filter(x => sectors.includes(x.sector)))
    }

    const [regions, setRegions] = useState([])
    function handleRegions() {
        setFilteredData(data.filter(x => regions.includes(x.region)))
    }

    const [pestles, setPestles] = useState([])
    function handlePestle() {
        setFilteredData(data.filter(x => pestles.includes(x.pestle)))
    }

    const [sources, setSources] = useState([])
    function handleSource() {
        setFilteredData(data.filter(x => sources.includes(x.source)))
    }

    const [countries, setCountries] = useState([])
    function handleCountry() {
        setFilteredData(data.filter(x => countries.includes(x.country)))
    }

    return (
        <div className="flex p-[5.125rem] w-screen">
            <Select options={selectOptions} value={current} onChange={handleSelectorChange} className="text-center w-[200px] mr-[1.025rem]" />
            <div className="w-[900px] h-fit">
                {current.value === "end_year" ? <EndYear handleEndYear={handleEndYear} filterOptions={filterOptions} setFilterOptions={setFilterOptions} /> : <></>}
                {current.value === "topics" ? <Topics handleTopics={handleTopics} selected={topics} setSelected={setTopics} /> : <></>}
                {current.value === "sector" ? <Sector handleSectors={handleSectors} selected={sectors} setSelected={setSectors} /> : <></>}
                {current.value === "region" ? <Region handleRegions={handleRegions} selected={regions} setSelected={setRegions} /> : <></>}
                {current.value === "pestle" ? <Pestle handlePestle={handlePestle} selected={pestles} setSelected={setPestles} /> : <></>}
                {current.value === "source" ? <Source handleSource={handleSource} selected={sources} setSelected={setSources} /> : <></>}
                {current.value === "country" ? <Country handleCountry={handleCountry} selected={countries} setSelected={setCountries} /> : <></>}
            </div>
        </div>
    )
}