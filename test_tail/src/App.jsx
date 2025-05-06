import React from 'react'
import Header from './components/header'
import Links from "./components/Links";
import { HeaderTwo } from './components/HeaderTwo';
import { BannerSection } from './components/BannerSection';
import MenuSection from './components/MenuSection';


const App = () => {
  return (
    <div >
      <Header />
      <HeaderTwo />
      <BannerSection />
      <MenuSection />

    </div>

  )
}

export default App