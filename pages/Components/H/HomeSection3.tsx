import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import homeimg from '@/public/img/2m.d5918ccd.webp'

const HomeSection3 = () => {
  return (
    <div className="flex justify-around pt-20  max-[1000px]:px-8 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:px-12 max-[1000px]:gap-8 max-[500px]:px-4 max-[400px]:pt-4">
     <div className="flex flex-col gap-4 w-[35%] max-[1250px]:w-[50%] max-[1000px]:w-full">
     <div>
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-700 text-[20px] font-semibold  min-[1900px]:text-[35px]">
            Why Choose Us
          </h2>
          <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
        </div>
        <h1 className="text-[40px] font-bold max-[700px]:text-[35px] max-[700px]:leading-[40px] max-[500px]:text-[28px] max-[500px]:leading-[30px] max-[800px]:py-4 min-[1900px]:text-[70px] min-[1900px]:leading-[70px] min-[1900px]:py-3">We execute our ideas form the start to finish.</h1>
        <p className="text-[18px] text-[#747474] min-[1900px]:text-[30px]">
          Maecenas tempus, tellus eget condime honcus semgs semper libero sit
          amet adipiscingem neque.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="homesection3icons h-[50px] min-w-[50px] text-[20px] flex items-center justify-center bg-blue-600 text-white min-[1900px]:h-[100px] min-[1900px]:w-[130px] min-[1900px]:text-[30px]">
          <FaGear />
        </div>
        <div>
          <h2 className="text-[24px] text-[#ff6a00] min-[1900px]:text-[35px] min-[1900px]:font-normal">Flexible Solutions</h2>
          <p className="text-[18px] text-[##747474] min-[1900px]:text-[30px]">Maecenas tempus, tellus eget condime honcus sem quam semper</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="homesection3icons h-[50px] min-w-[50px] text-[20px] flex items-center justify-center bg-blue-600 text-white min-[1900px]:h-[100px] min-[1900px]:w-[130px] min-[1900px]:text-[30px]">
          <FaClock />
        </div>
        <div>
          <h2 className="text-[24px] text-[#ff6a00] min-[1900px]:text-[35px] min-[1900px]:font-normal">24/7 Unlimited Support</h2>
          <p className="text-[18px] text-[##747474] min-[1900px]:text-[30px]">Maecenas tempus, tellus eget condime honcus sem quam semper</p>
        </div>
      </div>
     </div>
     <div className="h-[450px] w-[450px] max-[530px]:h-full max-[530px]:w-full">
      <Image src={homeimg} alt={"img"} className="  "/>
     </div>
    </div>
  );
};

export default HomeSection3;
