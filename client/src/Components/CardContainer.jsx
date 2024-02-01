import Card from "./Card"

export default function CardContainer({ title1, Chart1, title2, Chart2 }) {
    return (
        <div className='md:flex sm:block md:justify-around md:p-[1.5rem] sm:p-[0.7rem] md:my-[1.15rem] sm:my-[0.65rem]'>
            <Card title={title1} Chart={Chart1} />
            <Card title={title2} Chart={Chart2} />
        </div>
    )
}