export default function Card({ title, Chart }) {
    return (
        <div className='md:w-[625px] md:h-fit md:mx-[0.5rem] sm:w-[300px] sm:mx-[0.25rem] sm:my-[3rem] p-[0.75rem] border-[4px] rounded-md shadow-lg shadow-slate-200 hover:shadow-2xl hover:shadow-slate-400 hover:scale-[1.0075]'>
            <p className="text-center">{title}</p>
            <Chart />
        </div>

    )
}