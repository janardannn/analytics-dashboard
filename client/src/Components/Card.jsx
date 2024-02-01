export default function Card({ title, Chart }) {
    return (
        <div className='md:w-[600px] md:h-[450] md:mx-[3rem] sm:w-[300px] sm:mx-[1.5rem] p-[1.1rem] border-[4px] rounded-md shadow-lg shadow-slate-200 hover:shadow-2xl hover:shadow-slate-400 hover:scale-[1.0075]'>
            <p>{title}</p>
            <Chart />
        </div>

    )
}