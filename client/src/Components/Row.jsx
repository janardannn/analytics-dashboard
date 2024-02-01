export default function Row({ data }) {
    console.log(data)
    return (
        < div className="flex justify-between md:w-full sm:w-fit border border-gray-800 h-fit p-[1.2rem] break-words" >
            {/* <div className="w-[50px]">{data.title}</div> */}
            <div>{data.topic}</div>
            <div>{data.sector}</div>

            <div>{data.country}</div>
            <div>{data.region}</div>

            <div>{data.start_year}</div>
            <div>{data.end_year}</div>

            <div>{data.intensity}</div>
            <div>{data.likelihood}</div>

            <div>{data.pestle}</div>

            <div>{data.relevance}</div>

            <div><a href={data.url}>URL</a></div>
        </div >
    )
}