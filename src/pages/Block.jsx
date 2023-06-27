import React from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Cards from '../components/Cards'

const Block = () => {
  return (
    <div className='p-4'>
 <Navbar/>
 <Filter/>
<Cards/>


    </div>
  )
}

export default Block