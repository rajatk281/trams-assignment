import React from 'react'
import ServiceRow from '../components/ui/ServiceRow'
import { LinePattern, Texthighlight } from '../components/common/DecorativeShape'

const Services = () => {
    return (
        <div className=' px-18 my-18 relative'>
            <h2 className='pb-12 z-10'>What we <Texthighlight text="can" color="green" height={85} width={120} left={-10} />{" "} <br /> offer you!</h2>
            <ServiceRow />
            <div className="absolute top-25 left-19 z-[-1] scale-40 origin-top-left ">
                <LinePattern  />
            </div>
        </div>
    )
}

export default Services