import Image from "next/image";
import React from "react";
import homeimg1 from '@/public/img/1.347066da.webp'

const HomeSection1 = () => {
  
  return (
    <div className="heroSection bg-[#151423] mb-12 flex justify-around gap-2 py-[80px] overflow-hidden max-[750px]:flex-wrap  max-[750px]:gap-6 max-[750px]:py-4 max-[750px]:w-full">
      <div className="w-[48%] max-[750px]:w-full">
        <h2 className='text-[25px] text-blue-600 font-medium '>Best it solution</h2>
        <h1 className="text-[#ff6a00] text-[75px] font-bold leading-[90px] font-[Rajdhani,sans-serif] max-[480px]:text-[45px] max-[444px]:text-[40px] max-[444px]:leading-[50px] max-[480px]:leading-[60px]">Creating a better IT solutions</h1>
        <p className="text-[23px] text-white pb-8 pt-4 font-normal">Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
        <div className="flex gap-3">
            <button className="btn homesec1-btn1 bg-[#cb81fa] hover:text-black px-8 py-4 text-[18px] font-semibold text-white rounded max-[830px]:px-5 max-[360px]:px-2">Get Started</button>
            <button className="btn homesec1-btn2  hover:border-[#cb81fa]  bg-transparent border border-white px-8 py-4 text-[18px] font-semibold text-white rounded max-[830px]:px-5 max-[360px]:px-2">Contact Us</button>
        </div>
      </div>
      <div className="homesecimg1">
        <Image src={homeimg1} alt={"img"} height={440} width={440}/>
      </div>
    </div>
  );
};

export default HomeSection1;
