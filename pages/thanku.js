import React from 'react'
import Header from "./../layout/header";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
function thanku() {
  return (
    <>  
    <Head> 

    <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'AW-681569631');`}} />


    </Head>
    <Header />
      <div className='thankupage'>
        
     <Image src="/img/thankyou.jpg" className='imageth' alt="image" height={300} width={620} />
     <div>
      <p style={{color:'rgb(1, 46, 107)'}}>Our Representative Will Get Back to You Shortly</p>
      <hr/>
      {/* <Link href="/"><a>Back to Home</a></Link>
      <hr/> */}
      <p>Copyright © 2022. Elaundry.co.in | All rights reserved | Privacy Policy</p>
     </div>
    </div>
   
    </>

  )
}

export default thanku;