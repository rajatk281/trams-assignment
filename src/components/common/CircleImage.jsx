
export const CircleImage = ({ src, top, left, className = "", sizeClass = "size-20 md:size-28 lg:size-40" }) => {
    return (
        <div className={`border-white border-4 lg:border-6 rounded-full absolute overflow-hidden ${className}`}
            style={{
                top: top,
                left: left
            }}>
            <img src={src} alt="person" className={`rounded-full object-cover ${sizeClass}`} />
        </div>
    )
}

export default CircleImage