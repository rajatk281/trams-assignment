import CircleImage from "./CircleImage"

const Images = [
    {
        id: 1,
        src: "images/person-1.png",
        top: "180px",
        left: "2%",
        z: 10
    },
    {
        id: 2,
        src: "images/person-2.png",
        top: "140px",
        left: "10%",
        z: 10
    },
    {
        id: 3,
        src: "images/person-3.png",
        top: "50px",
        left: "28%",
        z: 10
    },
    {
        id: 4,
        src: "images/person-4.png",
        top: "205px",
        left: "35%",
        z: 10
    },
    {
        id: 5,
        src: "images/person-5.jpg",
        top: "75px",
        left: "50%",
        z: 0
    },
    {
        id: 6,
        src: "images/person-6.jpg",
        top: "135px",
        left: "59%",
        z: 10
    },
    {
        id: 7,
        src: "images/person-7.jpg",
        top: "40px",
        left: "73%",
        z: 10
    },
    {
        id: 8,
        src: "images/person-8.jpg",
        top: "170px",
        left: "85%",
        z: 10
    }
]

const Container = () => {
  return (
    <div className="relative w-full h-[400px] mt-8">
        {
          Images.map((item)=>(
            <CircleImage key={item.id} top={item.top} left={item.left} src={item.src} z={item.z}/>
          ))
        }
    </div>
  )
}

export default Container