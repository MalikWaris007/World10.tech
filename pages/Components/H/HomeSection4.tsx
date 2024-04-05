import React from "react";
import { FaLayerGroup } from "react-icons/fa";

const HomeSection4 = () => {
  return (
    <div className="bg-gray-500">
      <div className="flex gap-6 px-20">
        <div className="homesection4-div1 w-[900px] border bg-[#cb81fa] px-14 py-14 rounded-xl flex flex-col gap-5 h-[500px] max-[1400px]:px-6">
          <h1 className="text-[40px] text-[#fff] font-semibold">We provide the best IT solution</h1>
          <p className="text-[18px] text-[#fff]">
            Vestibulum ante ipsum primis ibus orci luctus etultrices posuebilia
            rae Sed aliquam nisi quis porttitor gue elitrat euismod oplacer
          </p>
          <p className="text-[18px] text-[#fff]">
            Rae Sed aliquam nisi quis aliquam Vestibulum ante ipsum primis ibus
            orci luctus etultrices posuebilia rae Sed aliquam nisi quis
            porttitor gue elitrat oplacer
          </p>
          <div className="flex gap-3">
            <button className="btn homesec-services-btn1  hover:text-black bg-transparent border border-black px-8 py-4 text-[18px] font-semibold text-black rounded">
              Contact Us
            </button>
            <button className="btn homesec-services-btn2 hover:border hover:text-black hover:border-[#000] bg-[#000] px-8 py-4 text-[18px] font-semibold text-white rounded">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex gap-6 flex-col">
        <div className="homesec4-div2 border bg-transparent hover:bg-[#cb81fa] transition duration-700 flex flex-col gap-4 items-center justify-center px-8 pt-11 pb-11 rounded-xl max-[1280px]:py-6 max-[1330px]:px-6 ">
            <FaLayerGroup />
            <h2 className="text-white text-[30px] font-semibold">Web design</h2>
            <p className="text-white text-[18px] font-semibold text-center">Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
        </div>
        <div className="homesec4-div2 border bg-transparent hover:bg-[#cb81fa] transition duration-700 flex flex-col gap-4 items-center justify-center p-8 pt-11 pb-11 rounded-xl max-[1280px]:py-6 max-[1330px]:px-6">
            <FaLayerGroup />
            <h2 className="text-white text-[30px] font-semibold">App development</h2>
            <p className="text-white text-[18px] font-semibold text-center">Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
        </div>
        </div>


       <div className="flex gap-6 flex-col">
       <div className="homesec4-div2 border bg-transparent hover:bg-[#cb81fa] transition duration-700 flex flex-col gap-4 items-center justify-center p-8 pt-11 pb-11 rounded-xl max-[1280px]:py-6 max-[1330px]:px-6">
            <FaLayerGroup />
            <h2 className="text-white text-[30px] font-semibold">Cloud Service</h2>
            <p className="text-white text-[18px] font-semibold text-center">Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
        </div>
        <div className="homesec4-div2 border bg-transparent hover:bg-[#cb81fa] transition duration-700 flex flex-col gap-4 items-center justify-center p-8 pt-11 pb-11 rounded-xl max-[1280px]:py-6 max-[1330px]:px-6"> 
        <FaLayerGroup />
        <h2 className="text-white text-[30px] font-semibold">It mangement</h2>
        <p className="text-white text-[18px] font-semibold text-center">Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
        </div>
       </div>


      </div>
    </div>
  );
};

export default HomeSection4;
