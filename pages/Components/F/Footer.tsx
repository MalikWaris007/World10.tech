import React from 'react'
import Image from 'next/image'
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
   <div className='footer pt-[40px]'>
 <footer className='flex justify-around max-[760px]:flex-wrap bg-center h-fit py-8 items-center'>
      <div className="w-[20%] flex flex-col gap-8 max-[760px]:w-[45%] max-[760px]:gap-4 max-[760px]:m-auto max-[500px]:w-full max-[500px]:px-20 max-[450px]:px-8">
        <div className="text-[20px] font-medium text-white">
          <h2>About company</h2>
        </div>
        <div className="text-white">
          <h2 className='font-semibold text-[20px]'>Address</h2>
          <h2 className='font-semibold text-[17px] max-[820px]:text-[14px]'>Melbourne GPO 434 VIC 3074, Australia.</h2>
        </div>
        <div className="flex gap-2">
          <div className='text-[#316FF6] hover:text-white hover:bg-[#cb81fa] hover:border-[#cb81fa] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center'><FaFacebook /></div>
          <div className='text-[#1DA1F2] hover:text-white hover:bg-[#cb81fa] hover:border-[#cb81fa] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center'><FaTwitter /></div>
         <div className='text-[#fa7e1e] hover:text-white hover:bg-[#cb81fa] hover:border-[#cb81fa] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center'> <FaInstagram/></div>
          <div className='text-[#CD201F] hover:text-white hover:bg-[#cb81fa] hover:border-[#cb81fa] cursor-pointer border bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center'><FaYoutube /></div>
        </div>
      </div>

        <div className="flex flex-col gap-4 max-[760px]:w-[45%] max-[500px]:w-full max-[500px]:px-24 max-[500px]:pt-12 max-[450px]:px-12">
        <h2 className='text-[20px] font-semibold ml-[-16px] text-white'>Service</h2>
        <div>
        <ul className='list-disc flex flex-col gap-1 max-[760px]:gap-2 text-white font-semibold'>
          <li>Web design</li>
          <li>Digital marketing</li>
          <li>It management</li>
          <li>Cloud services</li>
          <li>Machine learning</li>
        </ul>
        </div>
      </div>

      <div className=" flex flex-col gap-4 max-[760px]:w-[45%] max-[760px]:pl-8 max-[760px]:pt-20 max-[500px]:w-full max-[500px]:px-24 max-[500px]:pt-12 max-[450px]:px-12">
        <h2 className='font-semibold text-[20px] text-white ml-[-16px]'>Useful link</h2>
        <div>
        <ul className='list-disc flex flex-col gap-1 text-white font-semibold'>
          <li>About Us</li>
          <li>Team</li>
          <li>Portfolio</li>
          <li>Service</li>
          <li>Contact Us</li>
        </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[22%] mt-[-16px] max-[760px]:w-[45%] max-[760px]:pt-16 max-[500px]:w-full max-[500px]:pl-20 max-[500px]:pr-16 max-[380px]:pr-8 max-[450px]:px-8 max-[300px]:pr-4">
        <h2 className='text-white font-semibold text-[20px]'>Contact us</h2>
       <div className='footer-input flex justify-between w-fit border-2 border-white items-center rounded-md'> <input type="text" className='outline-none bg-transparent py-2 max-[860px]:w-[150px] placeholder:text-white placeholder:pl-2 placeholder:font-semibold' placeholder='Your Email'/><button className='footer-input-arrow'><FaArrowRight /></button></div>
       <div className='flex gap-2 items-start'>
        <input type="checkbox" name="" id="" className='mt-[8px]'/>
        <p className='text-[20px] font-semibold text-white max-[820px]:text-[16px]'>Maecenas tempususcondime honcus sem quam libero</p>
       </div>
      </div>
    </footer>
    <footer>
      <div className="py-8">
        <hr className=''/>
        <h2 className="text-center text-white text-[20px] pt-4">© 2024. All Rights Reserved</h2>
      </div>
    </footer>
   </div>
  )
}

export default Footer
