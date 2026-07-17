import { LinePattern, Texthighlight } from '../components/common/DecorativeShape'
import TestimonialCard from '../components/ui/TestimonialCard'
import CircleImage from '../components/common/CircleImage'

const Testimonials = () => {
    return (
        <div className='flex justify-around my-26 relative'>
            <div className=' m-8 relative w-3/5 ' >
                <div className='scale-50'>
                    <CircleImage src={"images/person-1.png"} top={50} left={50} className="scale-50" />
                </div>
                <div className='scale-25 w-full '>
                    <CircleImage src={"images/person-2.png"} top={650} left={-300} className="scale-50" />
                </div>
                <div className='scale-80'>
                    <CircleImage src={"images/person-3.png"} top={220} left={150} className="scale-50" />
                </div>
                <div className='scale-50'>
                    <CircleImage src={"images/person-4.png"} top={680} left={-100} className="scale-50" />
                </div>
            </div>
            <div className='flex items-center flex-col'>
                <h2 className='text-center py-8 z-10'>
                    <Texthighlight text="What" color="green" height={85} width={120} left={-10} />{" "} our customer  <br /> says About us</h2>
                <TestimonialCard />
            </div>
            <div className="absolute top-32 left-154 z-0 scale-50 origin-top-left ">
                <LinePattern />
            </div>
            <div className=' m-8 relative w-3/5 ' >
                <div className='scale-50'>
                    <CircleImage src={"images/person-5.jpg"} top={50} left={50} className="scale-50" />
                </div>
                <div className='scale-25 w-full'>
                    <CircleImage src={"images/person-6.jpg"} top={500} left={-300} className="scale-50" />
                </div>
                <div className='scale-35'>
                    <CircleImage src={"images/person-7.jpg"} top={580} left={-100} className="scale-50" />
                </div>
                <div className='scale-80'>
                    <CircleImage src={"images/person-8.jpg"} top={320} left={150} className="scale-50" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials