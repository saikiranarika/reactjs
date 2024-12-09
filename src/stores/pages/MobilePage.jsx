import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'

const MobilePage =() => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {mobileData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img  className="s"src={item.image} alt="" />
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}
      
    </div>
    </>
  )
}

export default MobilePage
