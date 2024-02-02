import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "../../App";

export default function Source({ selected, setSelected, handleSource }) {
    const [sources, setSources] = useState();

    useEffect(() => {
        const getSources = async () => {
            const data = await axios.get(API_URL + "/filter_by_source", {
                headers: { 'Content-Type': 'application/json' }
            })
            // console.log(data.data)
            setSources(data.data)
        }
        getSources()
    }, [])

    function handleSelected(e) {
        // console.log(e.target.checked)
        // console.log(selected)
        setSelected(prev => {
            if (e.target.checked === true && !prev.includes(e.target.nextSibling.textContent)) {
                return (
                    [...prev, e.target.nextSibling.textContent]
                )
            }
            else if (e.target.checked === false && prev.includes(e.target.nextSibling.textContent)) {
                let temp = prev;
                // console.log(temp.filter(x => x !== e.target.nextSibling.textContent))
                return (
                    temp.filter(x => x !== e.target.nextSibling.textContent)
                )
            }
        })
    }

    return (
        sources ?
            <div>
                <div className="flex w-fit flex-wrap">
                    {sources.map(source => (
                        <label key={source} className="border border-gray-300 p-[5px]"><input type="checkbox" onChange={handleSelected} className="w-[70px]" />{source}</label>
                    ))}
                </div>
                <button onClick={handleSource} className="border border-gray-700 w-[50px] h-[30px]">🔍</button>
            </div>
            :
            <></>
    )
}