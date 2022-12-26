import { Inter } from '@next/font/google'
import MainLayout from '../Components/Layout/MainLayout'
import MainSection from '../Components/MainSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <MainSection/>
      </MainLayout>
    </>
  )
}
