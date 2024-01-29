import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

const API_URL = import.meta.env.VITE_API_BASE_URL;

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    const getAllData = async () => {
      let dataArray = await axios.get(API_URL)
      dataArray = dataArray.data

      const dataStrs = dataArray.map(x => <div>{`${x.sector} + ${x.region} + ${x.topic}`}</div>)
      setData(dataStrs)
    }
    getAllData();

  }, [])

  return (
    <>
      <p>{data}</p>
    </>
  )
}

export default App
