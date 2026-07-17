import React from 'react'
import ServiceRow from '../components/ui/ServiceRow'
import { LinePattern, Texthighlight } from '../components/common/DecorativeShape'

const Services = () => {
    return (
        <div className='px-6 md:px-12 lg:px-18 my-16 md:my-24 lg:my-34 relative'>
            <h2 className='pb-12 z-10'>What we <Texthighlight text="can" color="green" height={85} width={120} left={-10} />{" "} <br /> offer you!</h2>
            <ServiceRow />
            <div className="absolute top-25 left-19 z-[-1] scale-40 origin-top-left hidden lg:block">
                <LinePattern  />
            </div>
        </div>
    )
}

export default Services