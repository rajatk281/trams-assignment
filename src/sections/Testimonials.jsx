import { LinePattern, Texthighlight } from '../components/common/DecorativeShape'
import TestimonialCard from '../components/ui/TestimonialCard'
import CircleImage from '../components/common/CircleImage'

const Testimonials = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center my-16 md:my-26 relative gap-8 lg:gap-12 overflow-hidden px-4 lg:px-0'>
            
            {/* Left side images container - desktop only */}
            <div className='w-[250px] h-[420px] relative hidden lg:block flex-shrink-0' >
                <CircleImage 
                    src="images/person-1.png" 
                    top="50px" 
                    left="80px" 
                    sizeClass="size-24" 
                />
                <CircleImage 
                    src="images/person-2.png" 
                    top="280px" 
                    left="10px" 
                    sizeClass="size-14" 
                />
                <CircleImage 
                    src="images/person-3.png" 
                    top="220px" 
                    left="130px" 
                    sizeClass="size-28" 
                />
                <CircleImage 
                    src="images/person-4.png" 
                    top="320px" 
                    left="70px" 
                    sizeClass="size-16" 
                />
            </div>

            {/* Testimonial text block */}
            <div className='flex items-center flex-col z-10 w-full lg:w-auto flex-shrink-0'>
                <h2 className='text-center py-8 z-10'>
                    <Texthighlight text="What" color="green" height={85} width={120} left={-10} />{" "} 
                    our customer  <br /> 
                    <span className="relative inline-block">
                        says About us
                        <div className="absolute top-[45px] left-[85px] z-[-1] scale-40 md:scale-70 origin-top-left pointer-events-none hidden lg:block">
                            <LinePattern />
                        </div>
                    </span>
                </h2>
                <TestimonialCard />
            </div>

            {/* Right side images container - desktop only */}
            <div className='w-[250px] h-[420px] relative hidden lg:block flex-shrink-0' >
                <CircleImage 
                    src="images/person-5.jpg" 
                    top="50px" 
                    left="10px" 
                    sizeClass="size-24" 
                />
                <CircleImage 
                    src="images/person-6.jpg" 
                    top="280px" 
                    left="150px" 
                    sizeClass="size-14" 
                />
                <CircleImage 
                    src="images/person-7.jpg" 
                    top="220px" 
                    left="-20px" 
                    sizeClass="size-28" 
                />
                <CircleImage 
                    src="images/person-8.jpg" 
                    top="320px" 
                    left="70px" 
                    sizeClass="size-16" 
                />
            </div>
        </div>
    )
}

export default Testimonials