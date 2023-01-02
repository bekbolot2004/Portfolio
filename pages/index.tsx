import { Inter } from '@next/font/google'
import About from '../ccomponents/About'
import Contacts from '../ccomponents/Contacts'
import Experience from '../ccomponents/Experience'
import MainLayout from '../ccomponents/Layout/MainLayout'
import MainSection from '../ccomponents/MainSection'
import Projects from '../ccomponents/Projects'
import Skills from '../ccomponents/Skills'

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
