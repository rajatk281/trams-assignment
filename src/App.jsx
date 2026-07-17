import Header from './components/layout/Header'
import Hero from './sections/Hero'
import Container from './components/common/Container'
import Footer from './components/layout/Footer'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <div>
      <div className='max-w-[1326px] mx-auto'>
        <Header />
        <Hero />
      </div>
      <Container />
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default App