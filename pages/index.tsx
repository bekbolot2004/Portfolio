import { Inter } from '@next/font/google'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Experience from '../components/Experience'
import MainLayout from '../components/Layout/MainLayout'
import MainSection from '../components/MainSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { motion, useScroll, useSpring } from "framer-motion";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    // primary: {
    //   light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
    secondary: {
      light: 'black',
      main: 'black',
      dark: 'black',
      contrastText: 'black',
    },
  },
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider theme={theme}>
      <motion.div style={{
        scaleX: scaleX,
        transformOrigin: "left",
        background: "black",
        position: "sticky",
        top: '0',
        width: '100%',
        height: '6px'
      }} />
      <MainLayout>
        <div>
          <MainSection />
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-12 gap-4 md:gap-5 '>
              <About />
              <Experience />
              <div className='col-span-12 lg:col-span-4  grid max-md:grid-cols-1 max-lg:grid-cols-2 gap-4 md:gap-5'>
                <Skills />
              </div>
              <Projects />
              <Contacts />
            </div>
          </div>
        </div>
      </MainLayout>
    </ThemeProvider>
  )
}
