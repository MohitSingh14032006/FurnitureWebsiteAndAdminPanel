import React, { useEffect, useState } from "react";
import { VscDashboard } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { GiWaterDrop } from "react-icons/gi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { GrTextAlignRight } from "react-icons/gr";
import { FaShoppingBag } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { FaSliders } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-router";


export default function SideBar() {  
  
  let [menu, setMenu] = useState(0);
  return (
    <>
      <div className="h-screen">
        <figure className="flex justify-center items-center mb-5 mt-5">
          <img
            src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
            alt=""
          />
        </figure>
        <hr/>
        <ul className="w-full p-3 flex flex-wrap flex-column" >
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <Link to={"/dashboard"} className="flex gap-3 items-center">
              <VscDashboard className="text-xl" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          <li className="w-full p-3  rounded-lg  hover:bg-gray-100">
            <a href="" className="flex justify-between items-center" 
            onClick={(e)=>{
              e.preventDefault()
              setMenu(1)}
            }>
              <span className="flex gap-2 items-center">
                <FaUser className="text-xl" />
                <span className="font-medium">Users</span>
              </span>
              <span>
                {menu == 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </a>
          </li>
          {
             menu==1 &&
            <li className="w-full ml-[10px] rounded-lg">
              <Link to={"/user"} className="flex justify-between items-center hover:bg-gray-100">
                {
                  menu == 1 && (
                  <a className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View User</span>
                  </a>
                  )
                }
              </Link>
            </li>
          }
          <li className="w-full p-3 rounded-lg hover:bg-gray-100 ">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(2)}
            }>
              <span className="flex gap-2 items-center">
                <IoChatbox className="text-xl"/>
                <span className="font-medium">Enquirys</span>
              </span>
              {menu == 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==2 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/enquiry"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Contact Enquirys</span>
                  </span>                 
              </Link>
              <Link to={"/newsletter"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Newsletters</span>
                  </span>
              </Link>
            </li>
          }

          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(3)}
            }
            >
              <span className="flex gap-2 items-center">
                <GiWaterDrop className="text-xl"/>
                <span className="font-medium">Colors</span>
              </span>
              {menu == 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==3 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/color/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Color</span>
                  </span>                 
              </Link>
              <Link to={"/color/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Color</span>
                  </span>
              </Link>
            </li>
          }

          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(4)}
            }>
              <span className="flex gap-2 items-center">
                <FaExpandArrowsAlt className="text-xl"/>
                <span className="font-medium">Materials</span>
              </span>
              {menu == 4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==4 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/material/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Material</span>
                  </span>                 
              </Link>
              <Link to={"/material/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Material</span>
                  </span>
              </Link>
            </li>
          }

          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(5)}
            }>
              <span className="flex gap-2 items-center">
                <GrTextAlignRight className="text-xl"/>
                <span className="font-medium ">Parent Categorys</span>
              </span>
              {menu == 5 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==5 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/category/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Category</span>
                  </span>                 
              </Link>
              <Link to={"/category/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Category</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(6)}
            }>
              <span className="flex gap-2 items-center">
                <GrTextAlignRight className="text-xl"/>
                <span className="font-medium ">Sub Categorys</span>
              </span>
              {menu == 6 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==6 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/category/sub-category/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Sub Category</span>
                  </span>                 
              </Link>
              <Link to={"/category/sub-category/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Sub Category</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(7)}
            }>
              <span className="flex gap-2 items-center">
                <GrTextAlignRight className="text-xl"/>
                <span className="font-medium ">Sub Sub Categorys</span>
              </span>
              {menu == 7 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==7 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/category/sub-sub-category/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Sub Sub Category</span>
                  </span>                 
              </Link>
              <Link to={"/category/sub-sub-category/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Sub Sub Category</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(8)}
            }>
              <span className="flex gap-2 items-center">
                <FaShoppingBag className="text-xl"/>
                <span className="font-medium">Products</span>
              </span>
              {menu == 8 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==8 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/product/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Product</span>
                  </span>                 
              </Link>
              <Link to={"/product/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Product</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(9)}
            }>
              <span className="flex gap-2 items-center">
                <RxCountdownTimer className="text-xl"/>
                <span className="font-medium">Why Choose Us</span>
              </span>
              {menu == 9 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==9 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/why-choose-us/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Why Choose Us</span>
                  </span>                 
              </Link>
              <Link to={"/why-choose-us/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Why Choose Us</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(10)}
            }>
              <span className="flex gap-2 items-center">
                <PiNotePencilBold className="text-xl"/>
                <span className="font-medium">Orders</span>
              </span>
              {menu == 10 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==10 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/orders/orders"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Orders</span>
                  </span>                 
              </Link>            
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(11)}
            }>
              <span className="flex gap-2 items-center">
                <FaSliders className="text-xl"/>
                <span className="font-medium">Sliders</span>
              </span>
              {menu == 11 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==11 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/slider/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Slider</span>
                  </span>                 
              </Link>
              <Link to={"/slider/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Slider</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(12)}
            }>
              <span className="flex gap-2 items-center">
                <FaLocationArrow className="text-xl"/>
                <span className="font-medium">Country</span>
              </span>
              {menu == 12 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==12 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/country/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Country</span>
                  </span>                 
              </Link>
              <Link to={"/country/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Country</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center"
            onClick={(e)=>{
              e.preventDefault()
              setMenu(13)}
            }>
              <span className="flex gap-2 items-center">
                <FaUserPen className="text-xl"/>
                <span className="font-medium">Testimonials</span>
              </span>
              {menu == 13 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==13 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"/testimonial/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add Testimonials</span>
                  </span>                 
              </Link>
              <Link to={"/testimonial/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View Testimonials</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center" 
            onClick={(e)=>{
              e.preventDefault()
              setMenu(14)}
            }>
              <span className="flex gap-2 items-center">
                <FaQuestion className="text-xl"/>
                <span className="font-medium">FAQs</span>
              </span>
              {menu == 14 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </a>
          </li>
          {
            menu==14 &&
            <li className="w-full p-3 rounded-lg ">
              <Link to={"faq/add"} className="flex justify-between items-center hover:bg-gray-100">                
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">Add FAQ</span>
                  </span>                 
              </Link>
              <Link to={"faq/view"} className="flex justify-between items-center hover:bg-gray-100">      
                  <span className="mt-2 flex gap-2 items-center">
                    <FaRegDotCircle className="text-xl" />
                    <span className="font-medium">View FAQ</span>
                  </span>
              </Link>
            </li>
          }
          <li className="w-full p-3 hover:bg-gray-100 rounded-lg">
            <a href="" className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                <IoDocumentTextSharp className="text-xl"/>
                <span className="font-medium">Terms & Conditions</span>
              </span>
              <IoIosArrowDown />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
