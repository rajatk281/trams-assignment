
export const CircleImage = ({ src, top, left }) => {
    return (
        <div className="border-white border-6 rounded-full absolute absolute"
            style={{
                top: top,
                left: left
            }
            }>
            <img src={src} alt="person-1" className="rounded-full size-40 " />
        </div>
    )
}

export default CircleImage