import React from 'react'
import Header from "./../layout/header";
import Image from 'next/image';
import Link from 'next/link';
function thanku() {
  return (
    <>  
    <Header />
      <div className='thankupage'>
     <Image src="/img/thankyou.jpg" className='imageth' alt="image" height={300} width={620} />
     <div>
      <p style={{color:'rgb(1, 46, 107)'}}>Our Representative Will Get Back to You Shortly</p>
      <Link href="/"><a>Back to Home</a></Link>
     </div>
    </div>
    </>

  )
}

export default thanku;