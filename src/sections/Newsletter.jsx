import CircleImage from "../components/common/CircleImage"
import { BlurCircle, LinePattern, Texthighlight } from "../components/common/DecorativeShape"

const Newsletter = () => {
    return (
        <div>
            <div className='relative p-16 py-28 flex justify-between items-center mx-auto overflow-hidden'>
                <div className="relative z-10">
                    <h2 className='pb-6'>Tomorrow should <br /> be better than <Texthighlight text="today" color="green" height={85} width={120} left={-10} /></h2>
                    <p>We are a team of strategists, designers communicators, researchers. <br />
                        Togeather, we belive that progress only happens when you refuse <br />
                        to play things safe.</p>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className='font-semibold'>Read more </span>
                        <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black" />
                        </svg>
                    </div>
                    <div className="absolute top-9 left-6 z-[-1] scale-70 origin-top-left">
                        <LinePattern />
                    </div>
                </div>
                <div className="relative w-1/2 ">
                    <div className="absolute -top-12 left-55 w-90 h-90 rounded-full overflow-hidden ">
                        <img
                            src="/images/team-1.png"
                            alt="person"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute left-130 z-[-1]">
                        <svg width="200" height="200" viewBox="0 0 233 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z" fill="#FF7171" />
                        </svg>

                    </div>
                </div>
                <div
                    className="absolute top-28 left-180 w-[150px] h-[150px] rounded-full bg-[#FF9A9A] blur-[70px] opacity-100 pointer-events-none z-0 "
                />
            </div>
            <div className=' px-16 flex mx-auto py-16'>
                <div className="relative w-1/2 z-10">
                    <div className="absolute -top-12 left-5 w-90 h-90 rounded-full overflow-hidden ">
                        <img
                            src="/images/team-2.png"
                            alt="person"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -left-14 z-[-1]">
                        <svg width="200" height="200" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
                        </svg>
                    </div>
                    <div className="absolute left-62 top-40 ">
                        <svg width="200" height="200" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
                        </svg>
                    </div>

                </div>
                <div className="relative z-10">
                    <h2 className='pb-6'><Texthighlight text="See" color="green" height={85} width={120} left={-10} />{" "} how we can <br /> help your progress</h2>
                    <p>We add a layer of fearless insights and action that allows change <br />
                        makers to accelerate their progress in areas such as brand, design<br />
                        digital, comms and social research.</p>
                    <div className='flex items-center gap-4 mt-4'>
                        <span className='font-semibold'>Read more </span>
                        <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black" />
                        </svg>
                    </div>
                    <div className="absolute top-24 left-66 z-[-1] scale-70 origin-top-left">
                        <LinePattern />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter