import { useState } from "react"

export default function EndYear({ handleEndYear, filterOptions, setFilterOptions }) {
    // const [yearValues, setYearValues] = useState({
    //     from: "",
    //     to: ""
    // })

    function handleYearInput(e) {
        // console.log(filterOptions)
        setFilterOptions(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    function handleClick(e) {
        setFilter('end_year')
    }

    return (
        <div>
            <input placeholder="From" name="from" onChange={handleYearInput} className="border border-gray-700 w-[100px] h-[30px] mr-[10px]"></input>
            <input placeholder="To" name="to" onChange={handleYearInput} className="border border-gray-700 w-[100px] h-[30px] mr-[10px]"></input>
            <button onClick={handleEndYear} className="border border-gray-700 w-[50px] h-[30px]">🔍</button>
        </div>
    )
}