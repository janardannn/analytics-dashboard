import { useEffect, useState } from "react";
import axios from "axios"
import ReactPaginate from "react-paginate"

import { API_URL } from "../App"
import Row from "./Row";
import ColumnName from "./ColumnName";
import MakeTable from "./MakeTable";

export default function AllData({ itemsPerPage }) {
    const [rawData, setRawData] = useState();

    const [rowItems, setRowItems] = useState([])
    const [itemOffset, setItemOffset] = useState(0)
    const endOffset = itemOffset + itemsPerPage;

    let currentItems, pageCount;

    useEffect(() => {
        const fetchData = async () => {

            const data = await axios.get(API_URL, {
                headers: { 'Content-Type': 'application/json' }
            })
            setRawData(data.data);
        }
        fetchData()
    }, [])

    if (rawData) {
        currentItems = rawData.slice(itemOffset, endOffset)
        pageCount = Math.ceil(rawData.length / itemsPerPage);
    }

    // console.log(currentItems)
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % itemsPerPage.length
        setItemOffset(newOffset)
    }

    return (
        rawData ? <MakeTable data={rawData} /> : <></>
    )

}

// return (
//     <>
//         <div className="flex flex-col px-[5.125rem]">
//             <div className="flex justify-between w-full border border-gray-800 h-[60px] p-[1.2rem]">

//                 <ColumnName className="" title={"Topic"} />
//                 <ColumnName title={"Sector"} />

//                 <ColumnName title={"Country"} />
//                 <ColumnName title={"Region"} />

//                 <ColumnName title={"Start Year"} />
//                 <ColumnName title={"End Year"} />

//                 <ColumnName title={"Intensity"} />
//                 <ColumnName title={"Likelihood"} />

//                 <ColumnName title={"Pestle"} />

//                 <ColumnName title={"Relevance"} />

//                 <ColumnName title={"URL"} />
//             </div>

//             {rawData ? <Row data={rawData[15]} /> : <div />}
//         </div>
//     </>
// )

// function Rows({ currentItems }) {
//     // currentItems ? console.log(currentItems.map(item => <Row data={item} />)) : ""
//     return (
//         currentItems ? currentItems.map(item => <Row data={item} />) : <div />
//     )
// }
