import React from 'react'
import { Layout } from '../components/layout'
import Main from '../components/pages/home/Main'
import Aboutus from '../components/pages/home/Aboutus'
import CurrencyInfo from '../components/pages/home/CurrencyInfo'

export const Home = () => {
  return (
 <>
 <Layout>
<Main/>
<Aboutus/>
 <CurrencyInfo/>
 </Layout>
 </>
  )
}
