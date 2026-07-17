

const TestimonialCard = () => {
  return (
    <div className='relative bg-green-50 px-8 py-12 md:px-16 md:py-8 mx-4 rounded-4xl text-center w-auto max-w-xl md:w-xl tracking-tight'>

      <svg
        className="absolute top-6 left-6"
        width="56"
        height="46"
        viewBox="0 0 56 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
       
        <path
          d="M13 0C20.18 0 26 5.82 26 13C26 20.18 20.18 26 13 26C11.5 26 10.1 25.7 8.8 25.2C9.8 33.5 11.5 46 11.5 46L4 46C4 46 0 30 0 13C0 5.82 5.82 0 13 0Z"
          fill="#C0C0C0"
        />
        
        <path
          d="M43 0C50.18 0 56 5.82 56 13C56 20.18 50.18 26 43 26C41.5 26 40.1 25.7 38.8 25.2C39.8 33.5 41.5 46 41.5 46L34 46C34 46 30 30 30 13C30 5.82 35.82 0 43 0Z"
          fill="#C0C0C0"
        />
      </svg>

      <p className='relative z-10'>
        Elementum  delivered the site with inthe timeline
        as they requested. Inthe end, the client found a 50%
        increase in traffic with in days since its launch. They
        also had an impressive ability to use technologies that
        the company hasn`t used, which have also proved to
        be easy to use and reliable
      </p>

     
      <svg
        className="absolute bottom-6 right-6"
        width="56"
        height="46"
        viewBox="0 0 56 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(180deg)' }}
      >
       
        <path
          d="M13 0C20.18 0 26 5.82 26 13C26 20.18 20.18 26 13 26C11.5 26 10.1 25.7 8.8 25.2C9.8 33.5 11.5 46 11.5 46L4 46C4 46 0 30 0 13C0 5.82 5.82 0 13 0Z"
          fill="#C0C0C0"
        />
     
        <path
          d="M43 0C50.18 0 56 5.82 56 13C56 20.18 50.18 26 43 26C41.5 26 40.1 25.7 38.8 25.2C39.8 33.5 41.5 46 41.5 46L34 46C34 46 30 30 30 13C30 5.82 35.82 0 43 0Z"
          fill="#C0C0C0"
        />
      </svg>

    </div>
  )
}

export default TestimonialCard