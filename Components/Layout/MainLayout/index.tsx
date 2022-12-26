import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <div className='max-w-[1200px] container mx-auto px-4'>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout