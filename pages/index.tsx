import { Inter } from '@next/font/google'
import About from '../Components/About'
import Contacts from '../Components/Contacts'
import Experience from '../Components/Experience'
import MainLayout from '../Components/Layout/MainLayout'
import MainSection from '../Components/MainSection'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <div className='grid grid-cols-12 gap-4 md:gap-5'>
        <MainSection />
        <Experience />
        <div className='col-span-12 lg:col-span-4  grid max-md:grid-cols-1 max-lg:grid-cols-2 gap-4 md:gap-5'>
          <About />
          <Skills />
        </div>
        <Projects />
        <Contacts />
      </div>
    </MainLayout>
  )
}
