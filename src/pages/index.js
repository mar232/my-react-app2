import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div  className="Hero">
      <div className="HeroGroup">
      
    <h1>NYC Taxis Data</h1>
    <p>This will be my data project about yellow and green taxissss</p>
    <Link to="/page-2/">See the data</Link>
    </div>
    </div>
  </Layout>
)

export default IndexPage
