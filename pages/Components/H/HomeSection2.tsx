import Image from "next/image";
import React from "react";
import homesecimg2 from "@/public/img/1.webp";
import CountingAnimation from "../C/CountingAnimation";

const HomeSection2 = () => {
  return (
    <div className="HomeAboutSec2 flex justify-around max-[1200px]:justify-center max-[500px]:pt-0 max-[1200px]:gap-24 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:gap-8 max-[1000px]:px-20 max-[650px]:px-8 max-[400px]:pt-0">
      <div className="flex max-[1200px]:w-[450px] max-[1200px]:h-[500px] max-[500px]:h-fit max-[1000px]:w-full max-[1000px]:justify-center">
        <Image src={homesecimg2} alt={""} height={500} width={500} />
      </div>
      <div className="w-[35%] max-[1000px]:w-full ">
        <div className="flex gap-2 items-center">
          <h2 className="text-blue-700 text-[20px] font-semibold">About</h2>
          <h2 className="w-[40px] h-[2px] bg-blue-700"></h2>
        </div>
        <h1 className="text-[40px] font-bold max-[700px]:text-[35px] max-[700px]:leading-[40px] max-[500px]:text-[28px] max-[500px]:leading-[30px] min-[1900px]:text-[70px] min-[1900px]:leading-[70px] min-[1900px]:py-3">
          We execute our ideas form the start to finish.
        </h1>
        <p className="text-[20px] text-[#747474] font-normal pt-4 max-[700px]:leading-[25px] min-[1900px]:text-[30px]">
          Maecenas tempus, tellus eget condime honcus sem quam semper libero sit
          amet adipiscingem neque sed imquam nunullam quis ante. Etiam sit amet
          orci.
        </p>
        <p className="text-[20px] text-black font-semibold pt-4 pb-3 max-[400px]:text-[18px] min-[1900px]:text-[30px]">
          Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed
          consequat
        </p>
        <div className="LeadingDiv flex gap-8 max-[400px]:gap-4 max-[300px]:gap-3 ">
          <div className="">
            <div className="flex gap-1">
              <div className="text-[40px] max-[460px]:text-[30px] font-semibold max-[400px]:text-[20px] max-[280px]:font-normal min-[1900px]:text-[60px]">
                <CountingAnimation targetNumber={200} />
              </div>
              <span className="flex items-end text-[20px] max-[460px]:text-[16px] mb-2 max-[400px]:text-[12px] min-[1900px]:text-[30px] min-[1900px]:font-medium">Y</span>
            </div>
            <h2 className="text-[20px] font-semibold text-[#151423] max-[460px]:text-[16px] max-[400px]:text-[12px] min-[1900px]:text-[30px]">
              Experiences
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1">
              <div className="text-[40px] max-[460px]:text-[30px] font-semibold max-[400px]:text-[20px] max-[280px]:font-normal min-[1900px]:text-[60px]">
                <CountingAnimation targetNumber={200} />
              </div>
              <span className="flex items-end text-[20px] max-[460px]:text-[16px] mb-2 max-[400px]:text-[12px] min-[1900px]:text-[30px] min-[1900px]:font-medium">Y</span>
            </div>
            <h2 className="text-[20px] font-semibold text-[#151423] max-[460px]:text-[16px] max-[400px]:text-[12px] min-[1900px]:text-[30px]">
              Experiences
            </h2>
          </div>

          <div className="">
            <div className="flex gap-1">
              <div className="text-[40px] max-[460px]:text-[30px] font-semibold max-[400px]:text-[20px] max-[280px]:font-normal min-[1900px]:text-[60px]">
                <CountingAnimation targetNumber={200} />
              </div>
              <span className="flex items-end text-[20px] max-[460px]:text-[16px] mb-2 max-[400px]:text-[12px] min-[1900px]:text-[30px] min-[1900px]:font-medium">Y</span>
            </div>
            <h2 className="text-[20px] font-semibold text-[#151423] max-[460px]:text-[16px] max-[400px]:text-[12px] min-[1900px]:text-[30px]">
              Experiences
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
