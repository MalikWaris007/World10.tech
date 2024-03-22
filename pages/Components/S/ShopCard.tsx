import React from 'react'
import Image from 'next/image'
import img1 from '@/public/img/1.webp'
import img2 from '@/public/img/1 (2).webp'
import { FaCartShopping, FaStar, FaTrashCan } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaSearch, FaSkype, FaTwitter, FaHeart, FaEye} from 'react-icons/fa'

const ShopCard = () => {
  return (
   <div className="bg-[#edd4fe] h-[750px] px-[160px] pt-[50px] relative">
    <div className="flex flex-col items-center justify-center pb-[20px] ">
            <h2 className='text-[14px] rounded-md w-fit font-bold bg-[#cb81fa] text-black px-3 py-1'>SHOP LAYOUT</h2>
            <h2 className='text-[30px] w-fit font-bold  text-black px-3 py-1'>AWESOME SHOP LAYOUTS</h2>
        </div>
     <div>
     <div className='flex justify-center gap-12 bg-[#f0ecec] p-8 w-full '>
      <div className=" rounded-full">
        <Image width={500} height={500} src={img1} alt={''} />
      </div>
        <div className="flex flex-col gap-3">
            <h2 className='text-[24px] font-bold'>Meat Kebab Vegetable</h2>
            <div className="flex gap-2 items-center">
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-gray-400 text-[18px]'><FaStar /></div>
                <h2>(4) Rating</h2>
            </div>
            <div className="">
            <div className="flex gap-2 items-center">
                <h2 className="text-gray-500 text-[14px]">Availbility:</h2>
                <h2 className="text-[#cb81fa] text-[14px] font-medium">In Stock</h2>
            </div>
            <div className="flex gap-2 items-center">
                <h2 className="text-gray-500 text-[14px]">Product Code:</h2>
                <h2 className="text-[#cb81fa] text-[14px] font-medium">#545653</h2>
            </div>
            <div className="flex gap-2 items-center">
                <h2 className="text-gray-500 text-[14px]">Tags:</h2>
                <h2 className="text-[#cb81fa] text-[14px] font-medium">Food, BBQ, First Food</h2>
            </div> 
            </div>
            <div className='w-[420px]'><p className='text-[15px] text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. aut neque blanditiis molestiae culpa. Voluptatum, sed in.</p></div>
            <div className="flex gap-12">
                <div className="">
                    <h2 className='text-[16px] font-bold pb-1'>Size</h2>
                    <select name="select" id="" className='border border-gray-500 rounded-md text-[16px] font-semibold outline-none'>
                        <option value="">select</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                    </select>
                </div>
                <div className="">
                    <h2 className='text-[16px] font-bold pb-1'>QTY</h2>
                    <select name="select" id="" className='border border-gray-500 rounded-md text-[16px] font-semibold outline-none'>
                        <option value="">select</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                    </select>
                </div>
            </div> 
            <div className="">
            <h2 className='text-[22px] font-bold pb-2'>Clear Section</h2>
            <div className="flex gap-4">
                <button className='btn text-[16px] text-white bg-[#cb81fa] p-2 px-4 rounded-md before:bg-[#edd4fe] hover:text-black'>Add to Cart</button>
                <button className='btn text-[16px] text-white bg-[#cb81fa] p-2 px-4 rounded-md before:bg-[#edd4fe] hover:text-black'>Add to Whitelist</button>
            </div>
            <div className="flex gap-2 items-center pt-3">
                <h2 className='text-[16px] font-bold'>Share Link:</h2>
                <div className="flex gap-1 text-[#cb81fa]">
                    <div><FaFacebook /></div>
                    <div><FaTwitter /></div>
                    <div><FaSkype /></div>
                    <div><FaInstagram /></div>
                    <div></div>
                </div>
            </div>
            </div>          
        </div>
      </div>
      <div className="bg-white w-[330px] px-6 pb-4 absolute top-[30%] left-[70px]">
        <div className="flex gap-12 w-[20%] p-6">
        <div className="">
        <select name="select" id="" className='rounded-md outline-none text-[16px] font-semibold flex items-center'>
                        <option value="">Blog</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                        <option value="">Food</option>
                    </select>
        </div>
        <h2 className='text-[16px] font-semibold '>Contact</h2>
        <div className="flex gap-2 items-center">
            <div><FaSearch /></div>
            <div><FaCartShopping /></div>
        </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <div className='rounded-full overflow-hidden w-[60px]'><Image src={img2} alt={''} height={60} width={60}/></div>
                <div className="">
                    <h2 className='font-semibold text-[15px]'>Baked Lemon Drink</h2>
                    <h2 className='text-[15px]'>1 x $60.00</h2>
                </div>
                <div className="pl-5">
                    <FaTrashCan />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className='rounded-full overflow-hidden w-[60px]'><Image src={img2} alt={''} height={60} width={60}/></div>
                <div className="">
                    <h2 className='font-semibold'>Baked Lemon Drink</h2>
                    <h2>1 x $60.00</h2>
                </div>
                <div className="pl-5">
                    <FaTrashCan />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className='rounded-full overflow-hidden w-[60px]'><Image src={img2} alt={''} height={60} width={60}/></div>
                <div className="">
                    <h2 className='font-semibold'>Baked Lemon Drink</h2>
                    <h2>1 x $60.00</h2>
                </div>
                <div className="pl-5">
                    <FaTrashCan />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className='rounded-full overflow-hidden w-[60px]'><Image src={img2} alt={''} height={60} width={60}/></div>
                <div className="">
                    <h2 className='font-semibold'>Baked Lemon Drink</h2>
                    <h2>1 x $60.00</h2>
                </div>
                <div className="pl-5">
                    <FaTrashCan />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div className='rounded-full overflow-hidden w-[60px]'><Image src={img2} alt={''} height={60} width={60}/></div>
                <div className="">
                    <h2 className='font-semibold'>Baked Lemon Drink</h2>
                    <h2>1 x $60.00</h2>
                </div>
                <div className="pl-5">
                    <FaTrashCan />
                </div>
            </div>
        </div>
        
      </div>
      <div className="absolute top-[15%] right-[4%] border-[10px] border-white">
        <div className="ShopPriceCard relative">
        <div className='absolute top-2 left-2 bg-white px-4 py-1 font-semibold text-gray-600 w-fit text-[18px]'>Sale!</div>
        
            <div className="absolute bottom-0 flex gap-2 pl-14 pb-7">
            <div className=" text-red-600 rounded-full bg-white p-3 w-fit text-[20px] "><FaHeart /></div>
              <div className=" text-gray-600 rounded-full bg-white p-3 w-fit text-[20px] "><FaCartShopping /></div>
              <div className=" text-gray-600 rounded-full bg-white p-3 w-fit text-[20px] "><FaEye /></div>
            </div>
            <div className="bg-white w-[310px] h-[150px] absolute top-[100%] flex flex-col gap-2 items-center justify-center">
                <h2 className='text-[24px] text-black font-semibold '>Caesar Salad</h2>
                <div className="flex gap-2 items-center">
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-[#ffd43b] text-[18px]'><FaStar /></div>
                <div className='text-gray-400 text-[18px]'><FaStar /></div>
            </div>
                <h2 className='text-[16px] font-semibold'>$6-99 - %</h2>
            </div>
             </div>
      </div>
     </div>
   </div>
  )
}

export default ShopCard
