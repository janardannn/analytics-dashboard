import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

import Card from './Components/Card';
import TopicVsLikelihood from './Components/TopicVsLikelihood';
import TopicVsRelevance from './Components/TopicVsRelevance';
import SectorVsIntensity from './Components/SectorVsIntensity';
import RegionVsSector from './Components/RegionVsSector';

export const API_URL = import.meta.env.VITE_API_BASE_URL;

export const randomColors = Array.from({ length: 97 }, () => { let c; do { c = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}` } while ((parseInt(c.substr(1, 2), 16) * 299 + parseInt(c.substr(3, 2), 16) * 587 + parseInt(c.substr(5, 2), 16) * 114) / 1000 < 50); return c; })

function App() {

  const [data, setData] = useState();

  // useEffect(() => {
  //   const getAllData = async () => {
  //     let dataArray = await axios.get(API_URL)

  //     setData(dataArray.data)
  //     // dataArray = dataArray.data

  //     // const dataStrs = dataArray.map(x => <div>{`${x.sector} + ${x.region} + ${x.topic}`}</div>)
  //     // setData(dataStrs)
  //   }
  //   getAllData();

  // }, [])

  return (
    <>
      <h1 className='text-2xl text-center mb-[1.5rem]'>Data Overview Dashbard</h1>
      `<div className='md:flex sm:block md:justify-between md:p-[1.5rem] sm:p-[0.7rem] md:my-[1.2rem] sm:my-[0.7rem]'>
        <Card title={"Topic VS Likelihood"} Chart={TopicVsLikelihood} />
        <Card title={"Topic VS Relevance"} Chart={TopicVsRelevance} />
      </div>

      <div className='md:flex sm:block md:justify-between md:p-[1.5rem] sm:p-[0.7rem] md:my-[1.2rem] sm:my-[0.7rem]'>
        <Card title={"Sector VS Intensity"} Chart={SectorVsIntensity} />
        <Card title={"Region VS Sector"} Chart={RegionVsSector} />
      </div>
    </>
  )
}

export default App
