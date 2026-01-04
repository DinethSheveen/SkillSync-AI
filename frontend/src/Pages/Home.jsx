import Banner from '../Components/Home/Banner'
import CTA from '../Components/Home/CTA.JSX'
import Features from '../Components/Home/Features'
import Footer from '../Components/Home/Footer'
import Hero from '../Components/Home/Hero'
import Testimonial from '../Components/Home/Testimonial'

function Home() {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home