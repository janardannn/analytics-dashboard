import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

import Card from './Components/Card';
import TopicVsLikelihood from './Components/TopicVsLikelihood';
import TopicVsRelevance from './Components/TopicVsRelevance';
import SectorVsIntensity from './Components/SectorVsIntensity';

export const API_URL = import.meta.env.VITE_API_BASE_URL;

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
      <h1 className='text-2xl text-center mb-[5rem]'>Data Overview Dashbard</h1>
      `<div className='md:flex sm:block md:justify-between md:p-[2rem] sm:p-[0.7rem]'>
        <Card title={"Topic VS Likelihood"} Chart={TopicVsLikelihood} />
        <Card title={"Topic VS Relevance"} Chart={TopicVsRelevance} />
      </div>

      <div className='md:flex sm:block md:justify-between md:p-[2rem] sm:p-[0.7rem]'>
        <Card title={"Sector VS Intensity"} Chart={SectorVsIntensity} />

        {/* <div className='md:w-[600px] md:h-[450] md:ml-[3rem] sm:w-[300px] sm:mr-[1rem]'>
          <p className='text-xl'>Topic VS Relevance</p>
          <TopicVsRelevance />
        </div> */}
      </div>
    </>
  )
}

export default App
