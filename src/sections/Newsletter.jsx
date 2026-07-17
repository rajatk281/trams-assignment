import { LinePattern, Texthighlight } from "../components/common/DecorativeShape"

const Newsletter = () => {
    return (
        <div className="overflow-hidden">
            {/* Section 1: "Tomorrow should be better than today" */}
            <div className='relative p-6 md:p-10 lg:p-16 py-16 md:py-20 lg:py-28 flex flex-col lg:flex-row justify-between items-center mx-auto'>
                <div className="relative z-10">
                    <h2 className='pb-6'>Tomorrow should <br /> be better than <Texthighlight text="today" color="green" height={85} width={120} left={-10} /></h2>
                    <p>We are a team of strategists, designers communicators, researchers.
                        <br className="hidden md:inline" />
                        {" "}Togeather, we belive that progress only happens when you refuse
                        <br className="hidden md:inline" />
                        {" "}to play things safe.</p>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className='font-semibold'>Read more </span>
                        <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black" />
                        </svg>
                    </div>
                    <div className="absolute top-9 left-6 z-[-1] scale-70 origin-top-left hidden lg:block">
                        <LinePattern />
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2 h-[200px] md:h-[250px] lg:h-auto hidden md:block">
                    <div className="absolute -top-42 left-20 md:left-32 lg:left-55 w-60 h-60 md:w-72 md:h-72 lg:w-90 lg:h-90 rounded-full overflow-hidden">
                        <img
                            src="/images/team-1.png"
                            alt="person"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -top-45 left-70 md:left-80 lg:left-116 z-[-1] hidden lg:block">
                        <svg width="200" height="200" viewBox="0 0 233 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z" fill="#FF7171" />
                        </svg>

                    </div>
                </div>
                <div
                    className="absolute top-28 right-0 lg:left-180 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-[#FF9A9A] blur-[70px] opacity-100 pointer-events-none z-0"
                />
            </div>
            {/* Section 2: "See how we can help your progress" */}
            <div className='px-6 md:px-10 lg:px-16 flex flex-col-reverse lg:flex-row mx-auto py-10 md:py-12 lg:py-16'>
                <div className="relative w-full lg:w-1/2 z-10 h-[200px] md:h-[250px] lg:h-auto hidden md:block">
                    <div className="absolute -top-12 left-5 w-60 h-60 md:w-72 md:h-72 lg:w-90 lg:h-90 rounded-full overflow-hidden">
                        <img
                            src="/images/team-2.png"
                            alt="person"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -left-14 z-[-1] hidden lg:block">
                        <svg width="200" height="200" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
                        </svg>
                    </div>
                    <div className="absolute left-62 top-40 hidden lg:block">
                        <svg width="200" height="200" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
                        </svg>
                    </div>

                </div>
                <div className="relative z-10">
                    <h2 className='pb-6'><Texthighlight text="See" color="green" height={85} width={120} left={-10} />{" "} how we can <br /> help your progress</h2>
                    <p>We add a layer of fearless insights and action that allows change
                        <br className="hidden md:inline" />
                        {" "}makers to accelerate their progress in areas such as brand, design
                        <br className="hidden md:inline" />
                        {" "}digital, comms and social research.</p>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className='font-semibold'>Read more </span>
                        <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black" />
                        </svg>
                    </div>
                    <div className="absolute top-24 left-66 z-[-1] scale-70 origin-top-left hidden lg:block">
                        <LinePattern />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter