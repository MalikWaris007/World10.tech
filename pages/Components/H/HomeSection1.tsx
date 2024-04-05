import Image from "next/image";
import React from "react";
import homeimg1 from '@/public/img/1.347066da.webp'
const updateCursor = (e: MouseEvent) => {
  const cursor = document.getElementById('cursor') as HTMLElement | null;
  const x = e.clientX;
  const y = e.clientY;
  if (cursor) {
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }
  const container = document.getElementById('heroSection') as HTMLElement | null;
  if (container) {
    container.style.backgroundPosition = (-x/50) + 'px ' + (-y/50) + 'px';  /* Background movement */
  }
};

// document.addEventListener('mousemove', updateCursor);

const HomeSection1 = () => {
  return (
    
    <div id="heroSection">
      <div id="cursor" className="bg-[#cc81fa83] mb-12 flex justify-around gap-2 py-[80px] overflow-hidden max-[750px]:flex-wrap  max-[750px]:gap-6 max-[750px]:py-4 max-[750px]:w-full">
      <div className="w-[48%] max-[750px]:w-full max-[940px]:w-[60%] max-[860px]:w-[80%] max-[820px]:w-[100%]">
        <h2 className='text-[25px] text-blue-600 font-medium  min-[1900px]:text-[35px]'>Best it solution</h2>
        <h1 className="text-[#ff6a00] text-[70px] font-bold leading-[90px] font-[Rajdhani,sans-serif] max-[480px]:text-[45px] max-[444px]:text-[40px] max-[444px]:leading-[50px] max-[480px]:leading-[60px] min-[1900px]:text-[90px]">Creating a better IT solutions</h1>
        <p className="text-[23px] text-gray-600 pb-8 pt-4 font-normal  min-[1900px]:text-[35px]">Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
        <div className="flex gap-3">
            <button className="btn homesec1-btn1 bg-[#cb81fa] hover:text-blue-600 px-8  text-[18px] font-semibold text-white rounded max-[830px]:px-5 max-[360px]:px-2 max-[360px]:text-[14px] min-[1900px]:text-[25px] min-[1900px]:py-4">Get Started</button>
            <button className="btn homesec1-btn2 hover:border-[#cb81fa] hover:text-black border border-[#cb81fa] px-8 py-2 text-[18px] font-semibold text-[#b94cfd] rounded max-[830px]:px-5 max-[360px]:px-2 max-[360px]:text-[14px] min-[1900px]:text-[25px]">Contact Us</button>
        </div>
      </div>
      <div className="homesecimg1">
        <Image src={homeimg1} alt={"img"} height={440} width={440}/>
      </div>
    </div>
    </div>
  );
};

export default HomeSection1;
