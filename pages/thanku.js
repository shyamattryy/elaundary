import React from 'react'
import Header from "./../layout/header";
import Image from 'next/image';
function thanku() {
  return (
    <>  
    <Header />
      <div className='thankupage'>
     <Image src="/img/thankyou.jpg" className='imageth' alt="image" height={300} width={620} />
    </div>
    </>

  )
}

export default thanku;