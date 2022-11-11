import React from 'react';
import Image from "next/image";
import hero from "../public/1.jpg";
import { FaInstagram,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Card() {
  return (
    <div className='cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 border-8 border-gradient-to-l from-blue-300 via-white to-blue-300 bg-gradient-to-tr h-3/4'>
          <div>
              <div className='flex justify-center items-center py-4'>
              <Image src={ hero} width="90" height="90" className='rounded-lg sepia '/>
              </div>
              <h1 className='text-neutral-700 font-bold text-3xl text-center'>John William</h1>
              <p className='font-normal uppercase text-base text-neutral-700 text-center pb-4'>UI/UX Developer</p>
              <h3 className='font-semibold text-md uppercase text-center py-2'>About</h3>
              <p className='text-sm text-neutral-600 text-center mx-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <div className='flex justify-center items-center gap-6 py-6'>
                <FaFacebookSquare className='w-6 h-6 text-blue-600 cursor-pointer'/>
                <BsTwitter className='w-6 h-6 text-blue-400 cursor-pointer'/>
                <FaInstagram className='w-6 h-6 text-yellow-400 cursor-pointer'/>
                <FaLinkedin className='w-6 h-6 text-blue-400 cursor-pointer'/>
              </div>
              <div className='flex justify-center items-center gap-6 py-6'>
              <button className='text-white uppercase bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-blue-500 p-3 font-semibold rounded-lg w-11/12 '>Work Together</button>
              </div>
             </div>      
    </div>
  )
}

export default Card