import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

import CardContainer from './Components/CardContainer';
import Card from './Components/Card';
import TopicVsLikelihood from './Components/TopicVsLikelihood';
import TopicVsRelevance from './Components/TopicVsRelevance';
import SectorVsIntensity from './Components/SectorVsIntensity';
import RegionVsSector from './Components/RegionVsSector';
import CountryVsTopic from './Components/CountryVsTopic';
import CountryVsIntensity from './Components/CountryVsIntensity';
import CountryVsSector from './Components/CountryVsSector';
import AllData from './Components/AllData';

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
    <div className='w-full md:p-[5.25rem] md:pt-[4.125rem]'>
      <h1 className='text-2xl text-center mb-[1.5rem]'>Visualization Dashboard</h1>
      {/* <div className='md:flex sm:block md:justify-around md:p-[1.5rem] sm:p-[0.7rem] md:my-[1.15rem] sm:my-[0.65rem]'>
        <Card title={"Topic VS Likelihood"} Chart={TopicVsLikelihood} />
        <Card title={"Topic VS Relevance"} Chart={TopicVsRelevance} />
      </div> */}

      <CardContainer
        title1={"Topic VS Likelihood"} Chart1={TopicVsLikelihood}
        title2={"Topic VS Relevance"} Chart2={TopicVsRelevance}
      />

      {/* <div className='md:flex sm:block md:justify-around md:p-[1.5rem] sm:p-[0.7rem] md:my-[1.15rem] sm:my-[0.65rem]'>
        <Card title={"Sector VS Intensity"} Chart={SectorVsIntensity} />
        <Card title={"Region VS Sectors"} Chart={RegionVsSector} />
      </div> */}

      <CardContainer
        title1={"Sector VS Intensity"} Chart1={SectorVsIntensity}
        title2={"Region VS Sectors"} Chart2={RegionVsSector}
      />

      {/* <div className='md:flex sm:block md:justify-around md:p-[1.5rem] sm:p-[0.7rem] md:my-[1.15rem] sm:my-[0.65rem]'>
        <Card title={"Country VS Topics"} Chart={CountryVsTopic} />
        <Card title={"Country VS Intensity"} Chart={CountryVsIntensity} />
      </div> */}

      <CardContainer
        title1={"Country VS Topics"} Chart1={CountryVsTopic}
        title2={"Country VS Sector"} Chart2={CountryVsSector}
      />

      <AllData itemsPerPage={10} />
    </div>
  )
}

export default App
