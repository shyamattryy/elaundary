import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
function Footer2() {
  return (
    <>
    <Head>

    </Head>
    {/* <!-- Footer --> */}
    <footer className="site-header style-2">
		
		<div className="header-top" style={{"backgroundColor":"#012e6b", "padding":"10px 0px"}}>
           
				<div className="row">
			
                </div>
            
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="header-bottom">
            <section class="">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
			<Link href="/"><a><Image  src="/img/logo-1-1 (1).png" alt="Picture of the logo" width={160} height={80} /> </a></Link>
					</div>
					 {/* <div className="col-lg-6 col-md-5 text-right">
						<div><Link href="+91 8968140816">
          <a>+91 8968140816</a>
        </Link></div>
		<div><Link href="+91 8968140816">
          <a>+91 7982518911</a>
        </Link></div>
					</div> */}
<div className="col-lg-6 col-md-5 text-right">
<div className="header_boxstyle5">
              <ul>
                <li>
                  <div className="image22">
                    <Image src="/img/icons/icon.svg" alt="Picture of the logo" width={40} height={40} />
                  </div>
                </li>
                <li>
                  <div className="headerright">
				  <div><Link href="tel:+91 8968140816">
          <a>+91 8968140816</a>
        </Link></div>
		<div><Link href="tel:+91 7982518911">
          <a>+91 7982518911</a>
        </Link></div>
                  </div>
                </li>
              </ul>
            </div>
			</div>
                </div>
            </section>
        </div>
    </footer>
    {/* <!-- Footer End --></footer> */}
    </>
  )
}

export default Footer2;