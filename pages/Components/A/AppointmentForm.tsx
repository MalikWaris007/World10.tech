import Image from "next/image";
import React from "react";
import { FaArrowRight, FaCalendar, FaCalendarDay, FaClock } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import AppointmentImg from '@/public/img/appointment_img.webp'

const AppointmentForm = () => {
  return (
    <div className="h-fit py-20 flex justify-around">
      <div className="w-[50%] pl-[50px]">
        <h2 className="text-[30px] font-semibold text-gray-900">Appoinment</h2>
        <div className="">
          <div className="flex gap-14">
            <div className="pt-6">
              <h2 className="text-[18px] font-semibold text-gray-900 pb-3">
                Name
              </h2>
              <div className="outline-none border border-[#cb81fa] rounded-lg px-5 py-3 w-fit pr-20">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-[18px] font-semibold text-gray-900 pb-3">
                Phone Number
              </h2>
              <div className="outline-none border border-[#cb81fa] rounded-lg px-5 py-3 w-fit pr-20">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="+923 246 920 609"
                />
              </div>
            </div>
          </div>
          <div className="pt-6">
            <h2 className="text-[18px] font-semibold text-gray-900 pb-3">
              Medical Record Number
            </h2>
            <div className="outline-none border border-[#cb81fa] rounded-lg px-5 py-3 w-full pr-20">
              <input
                className="outline-none"
                type="text"
                placeholder="844991-2425-4243"
              />
            </div>
          </div>
          <div className="flex gap-14">
            <div className="pt-6">
              <h2 className="text-[18px] font-semibold text-gray-900 pb-3">
                Preferred Date
              </h2>
              <div className="outline-none border border-[#cb81fa] rounded-lg px-5 py-3 w-fit pr-20 flex gap-5 items-center">
                <div className="text-[#cb81fa] text-[22px]">
                  <FaCalendarDays />
                </div>
                <input
                  className="outline-none"
                  type="date"
                  placeholder="Enter your Name"
                />
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-[18px] font-semibold text-gray-900 pb-3">
                Phone Number
              </h2>
              <div className="outline-none border border-[#cb81fa] rounded-lg px-5 py-3 w-fit pr-20 flex gap-5 items-center">
                <div className="text-[#cb81fa] text-[22px]">
                  <FaClock />
                </div>
                <input
                  className="outline-none"
                  type="time"
                  placeholder="+923 246 920 609"
                />
              </div>
            </div>
          </div>
          <div className="">
          <h2 className="text-[18px] font-semibold text-gray-900 py-3 ">Reason for Visit</h2>
          <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          <div className="flex gap-2 items-center">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          <div className="flex gap-2 items-center">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          </div>
          </div>
          <div className="">
          <h2 className="text-[18px] font-semibold text-gray-900 py-3 ">Reason for Visit</h2>
          <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          <div className="flex gap-2 items-center">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          <div className="flex gap-2 items-center">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          </div>
          <div className="flex gap-2 items-center pt-2">
            <input className="" type="checkbox" />
            <h2 className="text-[18px] font-medium text-gray-500">Routine Checkup</h2>
          </div>
          </div>
          <button className="btn px-8 py-2 mt-4 rounded-full text-white hover:text-black flex gap-2 items-center bg-[#cb81fa] before:bg-[#edd4fe]"><span>Supmit</span><div className=""><FaArrowRight /></div></button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="">
        <h2 className="text-[30px] text-black font-thin pb-12">Contact Info</h2>
       <div className=" rounded-2xl w-fit overflow-hidden"><Image src={AppointmentImg} alt={"img"} width={350} height={250}/>
        </div>
        </div>
       <div className="pt-4">
       <h2 className="text-[18px] text-black font-normal">Phone</h2>
       <h2 className="text-[18px] text-gray-600 font-thin">+92 324 692 0609</h2>
       </div>

       <div className="">
       <h2 className="text-[18px] text-black font-normal">Email Us</h2>
       <h2 className="text-[18px] text-gray-600 font-thin">example@gmail.com</h2>
       </div>

       <div className="">
       <h2 className="text-[18px] text-black font-normal">Our Location</h2>
       <h2 className="text-[18px] text-gray-600 font-thin">Bahawalpur Punjab, Pakistan</h2>
       </div>


       </div>
      
    </div>
  );
};

export default AppointmentForm;
