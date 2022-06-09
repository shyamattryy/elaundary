import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link';
import Header from "./../layout/header";
// import styles from '../styles/Home.module.css'
// import Validate from "./../layout/validate";
// import React from 'react'
import { useForm } from 'react-hook-form';   
// import axios from 'axios'                                                                                                               
export default function Home() {

  const [showModel, setShowModel] = useState(false)
  const [showModel2, setShowModel2] = useState(false)
  const [showModel3, setShowModel3] = useState(true)

  const {register, handleSubmit, formState:{errors}} = useForm();
  const myfun = (d) =>{
  //   const [email,setEmail]=useState('')
  //   const SendMail = async (e)=>{
  //     e.preventDefault();
  //  console.log('call')
  //   }
  window.location.replace("/thanku");
// alert(d.youremail);
  }
  return (
    <div >
      <Head>
        <title>Domestic Elaundry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  {/* <Validate /> */}
      <Header />
      <section>
        <div className="row container">


        </div>
      </section>
      <section className="fullwidth">
        <div className="row banner_sct">

          <div className="col-5 banner_txt">
            <h1><strong className="bannr_txt">Grow Your Laundry</strong>  & Dry Cleaning Business</h1>
            <p>eLaundry is a Laundry and Dry Cleaning Management Software that can reduce your workload of daily operational activites
              and accomodate you to focus more on to maximize profits.</p>
          </div>
          <div className="col-7">
            <Image src="/img/banner/laundaryy@2x.jpg" alt="Picture of the logo" width={1320} height={800} />
          </div>
        </div>
      </section>

      <section className="fullwidth1">
        <div className="row fir_bck_img"></div>
        {/* <Image src="/img/banner/second_page.jpg" alt="Picture" width={1320} height={300}  className="fullimage"/> */}

      </section>
      <section className="e_free_demo">
        <div className="row">
          <h3>E-Laundry Free Demo</h3>
          <button onClick={() => setShowModel(!showModel)} type="button" className="demo_btn">Get a Demo Form</button>

        </div>
      </section>
      <section className="get_a_semo_form"  style={{display:showModel?"block":"none"}}>
        <div className="row get_qet_bckgrnd">
        <form onSubmit={handleSubmit(myfun)}>
          <div className="get_demo_txt"><h4>E-Laundry Free Demo</h4>
            <p>Try the 30 Days Free Demo.</p>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example1">Your Name [Required]</label>
            <input type="text" id="form1Example1" className="form-control" {...register('yourname',{required:true})} />
            {errors.yourname && errors.yourname.type == "required" && <p className='text-danger'>Please Enter Your Name</p>}
            {/* {errors.yourname && errors.yourname.type == "minLength" && <p className='text-warning'>Please Enter Minimum 3 Letter</p>} */}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example1">Your Email [Required]</label>
            <input type="email" id="form1Example1" className="form-control" {...register('youremail',{required:true})} />
            {errors.youremail && errors.youremail.type == "required" && <p className='text-danger'>Please Enter Your Email</p>}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example1">Country</label>
            <input type="text" id="form1Example1" className="form-control" {...register('country',{required:true})} />
            {errors.country && errors.country.type == "required" && <p className='text-danger'>Please Enter Your Country</p>}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example1">city</label>
            <input type="text" id="form1Example1" className="form-control" {...register('city',{required:true, minLength:3})} />
            {errors.city && errors.city.type == "required" && <p className='text-danger'>Please Enter Your City</p>}
            {errors.city && errors.city.type == "minLength" && <p className='text-warning'>Please Enter Minimum 3 Letter</p>}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example1">Contact Number</label>
            <input type="number" id="form1Example1" className="form-control" {...register('contact',{required:true})} />
            {errors.contact && errors.contact.type == "required" && <p className='text-danger'>Please Enter Your Contact Number</p>}
          </div>
{/* <Link href="/thanku"> */}
          <input type="submit" value="Book Free Demo" className="btn btn-primary btn-block" />
          {/* </Link> */}
          {/* <Link to="/courses" replace /> */}
        </form>
        </div>
      </section>
      <section>
        <div className="row banner_sct1">

          <div className="col-6">
            <Image src="/img/banner/laundary.jpg" alt="Picture of the logo" width={1320} height={650} />


          </div>
          <div className="col-6">
            <h3>Point of Sale all-in-one Laundry and Dry-Cleaning Stores.</h3>
            <p>E-Laundry Solution accepted by Domestic and International Laundry and Dry-Cleaners to
              track Business Insights and grow their Revenue.</p>
            <ul>
              <li>Order Booking, Invoice & Tag Management-QR code</li>
              <li>Reporting and order Tracking Management</li>
              <li>Customer Management & SMS-Email Notification</li>
              <li>Garment Tracking,<div className="mstm"> Multiple Store Management</div></li>
              <li>Super Speed of Booking Platform through Any Payment Mode</li>
            </ul>

          </div>
        </div>
      </section>

      <div className="row getqt_btn">
      <button type="button" className="demo_btn" onClick={() => setShowModel(!showModel)}> Get a Quote</button>
      </div>
      <section className="get_qut_sct" >
        <div className="get_qwt_ttle"><h3>Major Features</h3></div>
        <div className="row major_fetre">
        <div className="col-7 qoute_sct_li">
          {/* <div class="card red py-2" id="intro"> */}

          {/* <hr class="qoute_sct_li" /> */}
          {/* <p class="font-weight-bold">Basic example</p> */}

          <ul>
            <li> CRM (Customer Relationship Management System)</li>
            <p>A complete CRM solution to manage your customer complaints & feedback.</p>
            <li>Fully Customizable</li>
            <p>Add or remove features according to your business needs.</p>
            <li>Mobile Application</li>
            <p>Rider and Customer application for pickup & delivery with integrated POS.</p>
            <li>
            Instant Coupons & Discount
            </li>
            <p>Apply instant coupons & discounts to your customer orders.</p>
            <li>Sms & Email Notification</li>
            <p>Communicate with your customers through Sms & Email notification.</p>
            <li>Data Theft Control & Backup</li>
            <p>Complete data security with user access controls & backup facility to protect sensitive data.</p>
            <li>Advance Payment Option
</li>
            <p>Feature to accept partial & advance payment on your orders.</p>
            <li>Warehouse Management</li>
            <p>Full Warehouse tracking and mananagement by individual store.</p>
            <li>Invoice and Challan</li>
            <p>Automatic customer invoice and Ware-House challan generated.</p>
        
        
          </ul>
        </div>
        <div className="col-5">
        <Image src="/img/background/getty.jpg" className="get_qwt_img1" alt="Picture of the logo" width={350} height={350} />
        <Image src="/img/background/image (2).jpg" className="get_qwt_img2" alt="Picture of the logo" width={350} height={200} />

          </div>
        </div>
      </section>
      
      <section className="fullwidth1">

        <div className="row sec_bck_img">
          {/* <Image src="/img/banner/GettyImage.jpg" alt="Picture of the logo" width={1320} height={500} /> */}
          
        </div>
      </section>




      <section className="boxstyle778">

        <div className="row why_chsus">
          <h2>Why Choose Us ?</h2>
          <h4>Features that accelerate the growth of Laundry Business</h4>
        </div>


        <div className="row why_chsus_data">
          <div className="col-6">
            <div className="boxstyle5">
              <ul>
                <li>
                  <div className="image">
                    <Image src="/img/diagram-multi-store2A.jpg" alt="Picture of the logo" width={100} height={100} />
                  </div>
                </li>
                <li>
                  <div className="contentbox">
                  <h5>Multiple Store Managment</h5>
                    <p>Multiple store management with proper order tracking and connectivity with warehouse factory. Admin can access all retails or franchises from single platform.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="boxstyle5">
              <ul>
                <li>
                  <div className="image">
                    <Image src="/img/offer.png" alt="Picture of the logo" width={100} height={100} />
                  </div>
                </li>
                <li>
                  <div className="contentbox">
                  <h5>Offering Deal & Discount to Customers</h5>
                    <p>Generate Deal and Discount coupons or promo codes. Helpful for customer retention.</p>
                 </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="boxstyle5">
              <ul>
                <li>
                  <div className="image">
                    <Image src="/img/bill.png" alt="Picture of the logo" width={100} height={100} />
                  </div>
                </li>
                <li>
                  <div className="contentbox">
                  <h5>Invoice & Garment Tag Managment</h5>
                    <p>Automatic Invoice or tag generation at the time of order booking both Mini and A4 size invoices.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="boxstyle5">
              <ul>
                <li>
                  <div className="image">
                    <Image src="/img/user-interface.png" alt="Picture of the logo" width={100} height={100} />
                  </div>
                </li>
                <li>
                  <div className="contentbox">
                  <h5>Mobile Application-Customer & Rider</h5>
                    <p>Customer Mobile application for order booking Rider application for pickup and delivery with intergr- ated POS.</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="boxstyle5">
              <ul>
                <li>
                  <div className="image">
                    <Image src="/img/cashless-payment.png" alt="Picture of the logo" width={100} height={100} />
                  </div>
                </li>
                <li>
                  <div className="contentbox">
                  <h5>Online & Offline Order Payment Collection</h5>
                    <p>Customer can book order on store walking through website or Mobile application Payment collection offline Online through debit or credit card, Mobile wallet or Wallet.</p>
                   </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="boxstyle5">
              <ul>
                <li>
                  <div className="image">
                    <Image src="/img/sms.jpg" alt="Picture of the logo" width={100} height={100} />
                  </div>
                </li>
                <li>
                  <div className="contentbox">
                    <h5>SMS and Email Notification</h5>
                    <p>Customer can get the information through SMS and Email Alerts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </section>





      <section className="boxstyle72">
        <div className="row get_qute">
          <div className="col-8">

          </div>
          <div className="col-4">
       


<div className="freedemosection22">
<h3 className='mb-6'>E-Laundry Free Demo</h3>
<button type="button" className="demo_btn11 mt-4 "  onClick={() => setShowModel(!showModel)}>Get a Quote</button>
          {/* <button onClick={() => setShowModel(!showModel)} type="button" className="demo_btn">Get a Demo Form</button> */}
</div>


            
            <div className="col_boxx">
              <div className="demo_form_text" style={{display:showModel3?"block":"none"}}> 
               
              <ul>
            <li>End to End Garment Tracking </li>
           
            <li>Multi Store Management</li>
     
            <li>Automated QR Coded Tags</li>
          
            <li>Effective Financial Reports </li>
            <li>Laundry & Dry Cleaning Mobile App</li>
            <li>Excellent User Experience interface</li>
            
            </ul>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="styleelndry11">
        <div className="row tryelndry11">
          <h5>Try E-Laundry Today</h5>
          <p>No credit card | Free for 30days | Easy Setup</p>

          <button type="button" className="free_trl_btn">Start Free Trial</button>
        </div>
      </section>

      {/* <button onClick={() => SetForm()}>click me</button>

      <div style={{
        display: "none"
      }}>
        <h1>sahil</h1>
      </div> */}
      {/* modal */}



    
<footer className="page-footer font-small indigo">

<div className="container text-center text-md-left">
``
<div className="row">

<div className="col-md-3 mx-auto">

<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Get in Touch</h5>

<ul className="list-unstyled">
  <li>
  <i className="fa fa-envelope" aria-hidden="true"></i><a href="#!">info@omrasolutions.com</a>
  </li>
  {/* <li>
    <a href="#!">sachin@omarasolution.com</a>
  </li>
  <li>
    <a href="#!">alka@omarasolution.com</a>
  </li> */}
</ul>

</div>

<hr className="clearfix w-100 d-md-none"/>
<div className="col-md-3 mx-auto">

<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact Us</h5>

<ul className="list-unstyled">
  <li>
  <div className="headerright">
				  <div><Link href="+91 8968140816">
          <a>+91 8968140816</a>
        </Link></div>
		<div><Link href="+91 7982518911">
          <a>+91 7982518911</a>
        </Link></div>
                  </div>
  </li>
</ul>

</div>

<hr className="clearfix w-100 d-md-none"/>

<div className="col-md-3 mx-auto">

<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Office Address</h5>

<p className="footer_add">Address: Noida, UP;
Miyapur, Hyderabad
Virar, Mumbai
</p>
</div>

<hr className="clearfix w-100 d-md-none"/>

<div className="col-md-3 mx-auto">
<h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow Us</h5>

{/* <div className="socail">
                        <Link  className="fa fa-facebook" aria-hidden="true" href="https://www.facebook.com"></Link>
                        <Link  className="fa fa-twitter" aria-hidden="true" href="https://twitter.com"></Link>
                        <Link className="fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com"></Link>
                          </div> */}
</div>

</div>
</div>
<div className="row footer-copyright text-center py-3">
    <p>Copyright © 2022. Elaundry.co.in | All rights reserved | Privacy Policy</p>
</div>
</footer>
    </div>
  )
}
