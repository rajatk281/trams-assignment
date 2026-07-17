const colors = {
    pink: "#FFD7F5",
    green: "#DDEFD5",
    darkPurple: "#751beaff"
}

export const Line = ({ length, angle, top,
    left, z }) => {
    return (
        <div className={` bg-yellow-400 h-[5px] absolute `}
            style={{
                width: length,
                transform: `rotate(${angle}deg)`,
                top,
                left,
                z,
            }}>
        </div>
    )
}

export const LinePattern = () => {
    return (
        <div className='relative w-screen h-screen '>
            <Line length="350px" angle="0" top="10px" left="21px" />
            <Line length="380px" angle="357" top="19px" left="-26px" />
            <Line length="420px" angle="0" top="28px" left="2px" />
            <Line length="220px" angle="354" top="40px" left="199px" />
        </div>
    )

}

export const Texthighlight = ({ color, text, height, width, left }) => {
    return (
        <span className="relative inline-block">
            {text}
            <span
                className={`absolute top-2 rounded-full -z-10`}
                style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    height: `${height}%`,
                    backgroundColor: colors[color],
                }}
            />
        </span>
    )
}

export const Wave = () => {
    return (
        <div className="flex">
            <svg width="73" height="366" viewBox="0 0 73 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" stroke="#FF7171" stroke-width="8" />
            </svg>
            <svg width="84" height="355" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809" stroke="#0E0E0E" stroke-width="8" />
            </svg>

        </div>


    )
}

export const BlurCircle =()=>{
    return (
        <div
  className=" border
    absolute
    top-0
    left-0
    w-[166px]
    h-[166px]
    rounded-full
    bg-[#FF9A9A]
    blur-[100px]
    opacity-50
  "
/>
    )
}
