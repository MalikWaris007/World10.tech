import React from 'react'
import Layout from './Components/L/Layout'
import ShopMainSec from './Components/S/ShopMainSec'
import ShopCard from './Components/S/ShopCard'
import AboutLastSec from './Components/A/AboutLastSec'

const ShopPage = () => {
  return (
    <Layout >
        <ShopMainSec />
        <ShopCard />
        <AboutLastSec />
    </Layout>
  )
}

export default ShopPage
