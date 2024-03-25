import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/img/logo.webp";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass, FaMinus } from "react-icons/fa6";

const Header = () => {
  
  return (
   <div className="w-full m-auto">
     <header className="flex sticky top-0 z-10 justify-between items-center bg-white border border-black ">
      <div className="pl-6 max-[800px]:pl-0">
        <Link href={""}>
          <Image src={logo} alt="" height={80} />
        </Link>
      </div>
      <div className="flex gap-12 max-[960px]:gap-4">
        <nav className="navbar flex gap-8 max-[920px]:gap-4">
          <Link
            href={"/"}
            className="navlink hover:after:w-[40px] flex gap-2 items-center text-black font-medium relative"
          >
            <h2 className="text-[#565560] hover:text-[#cb81fa]">Home</h2>
            <div className="plus">
              <FaPlus />
            </div>
            <div className="minus">
              <FaMinus />
            </div>
          </Link>
          <Link
            href={"/ShopPage"}
            className="navlink flex gap-2 items-center font-medium relative hover:after:w-[40px]"
          >
            <h2 className="text-[#565560] hover:text-[#cb81fa]">Shop</h2>
            <div className="plus">
              <FaPlus />
            </div>
            <div className="minus">
              <FaMinus />
            </div>
          </Link>
          <div className="dropdown navlink hover:after:w-[60px]">
            <Link
              href={"/Services"}
              className="navlink flex gap-2 items-center font-medium"
            >
              <h2 className="text-[#565560] hover:text-[#cb81fa]">Services</h2>
              <div className="plus">
                <FaPlus />
              </div>
              <div className="minus">
                <FaMinus />
              </div>
            </Link>
            <div className="absolute pt-7">
            <div className="dropdown-options">
              <Link href={""}>Certification</Link>
              <Link href={""}>Courses</Link>
              <Link href={""}>Tutorials</Link>
              <Link href={""}>Excercies</Link>
            </div>
            </div>
          </div>
          <div className="dropdown navlink hover:after:w-[80px]">
            <Link
              href={""}
              className="navlink flex items-center gap-2 font-medium"
            >
              <h2 className="text-[#565560] hover:text-[#cb81fa]">MyWorld10</h2>
              <div className="plus">
                <FaPlus />
              </div>
              <div className="minus">
                <FaMinus />
              </div>
            </Link>
            <div className="absolute pt-7">
            <div className="dropdown-options">
              <Link href={"/About"}>About</Link>
              <Link href={"/TeamPage"}>Team</Link>
              <Link href={"/TeamDetail"}>Team Detail</Link>
              <Link href={"/ProjectPage"}>Project</Link>
              <Link href={"/ProjectDetailPage"}>Project Detail</Link>
            </div>
            </div>
          </div>

          <Link
            href={"/BlogPage"}
            className="navlink flex gap-2 items-center font-medium relative hover:after:w-[35px]"
          >
            <h2 className="text-[#565560] hover:text-[#cb81fa]">Blog</h2>
            <div className="plus">
              <FaPlus />
            </div>
            <div className="minus">
              <FaMinus />
            </div>
          </Link>
          <div className="dropdown navlink hover:after:w-[80px]">
            <Link href={"/ContactPage"} className="navlink font-medium relative">
              <h2 className="text-[#565560] hover:text-[#cb81fa]">
                Contact Us
              </h2>
            </Link>
            <div className="absolute pt-7">
            <div className="dropdown-options">
              <Link href={"/CreateMeeting"}>Create Meating</Link><hr/>
              <Link href={""}>Chat with us</Link><hr />
              <Link href={""}>Contact Services</Link><hr />
            </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center ">
          <div className="pr-6 max-[750px]:pr-3">
            <FaMagnifyingGlass />
          </div>
          <div className="btn navbar-btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </header>
   </div>
  );
};

export default Header;
