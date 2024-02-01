import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import TopicVsLikelihood from './Components/TopicVsLikelihood';
import TopicVsRelevance from './Components/TopicVsRelevance';

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
      <div className='flex justify-between'>
        <div className='w-[600px] h-[450] mr-[3rem]'>
          <p className='text-xl'>Topic VS Likelihood</p>
          <TopicVsLikelihood />
        </div>

        <div className='w-[600px] h-[450] ml-[3rem]'>
          <p className='text-xl'>Topic VS Relevance</p>
          <TopicVsRelevance />
        </div>
      </div>
    </>
  )
}

export default App
