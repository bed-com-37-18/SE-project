
//import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Navbar from '../components/navbar'
import Background from '../components/Background'

export default function Home() {
  return (
    <div className="">
         <Navbar/>
         <Hero/>
         <Contact/>
         <Footer/>
    </div>
  )
}
