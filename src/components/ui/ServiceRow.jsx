import { MoveRight } from 'lucide-react'

const serviceItems = [{
    id: 1,
    desc: "Office of multiple interest content",
    heading: "Colaborative & partnership",
},
{
    id: 2,
    desc: "The hanger US Air force digital experimental",
    heading: "We talk about our weight",
},
{
    id: 3,
    desc: "Delta faucet content, social, digital",
    heading: "Piloting digital confidence",
}
]

const ServiceRow = () => {
    return (
        <div>
            <hr />
            {
                serviceItems.map((items) => (
                    <div key={items.id} className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 py-6 border-b'>
                        <p className='max-w-full md:max-w-50'>{items.desc}</p>
                        <h3>{items.heading}</h3>
                        <MoveRight />
                    </div>

                ))
            }
        </div>
    )
}

export default ServiceRow