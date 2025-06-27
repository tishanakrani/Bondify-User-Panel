import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>
        {children} 
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
