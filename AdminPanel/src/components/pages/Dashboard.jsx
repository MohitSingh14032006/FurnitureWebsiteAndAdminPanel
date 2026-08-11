import React from 'react'
import { HiDotsVertical } from "react-icons/hi";

export default function Dashboard() {
  return (
    <>
        <section className='w-full p-2'>
            <span className='text-gray-700 font-medium text-lg'>Home / Dashboard</span>
        </section>
        <hr className='text-gray-500 m-1'/>
        <section className='w-full min-h-[610px] p-3'>
            <div className='flex flex-wrap gap-5'>
                <div className='w-[400px] h-[200px] bg-indigo-700 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold text-stone-50 text-2xl'>
                            26K <emsp/>
                            <span className='font-bold text-stone-50 text-lg'>
                                (-12.4% &darr;)
                            </span>
                        </span>
                        <HiDotsVertical className='text-stone-50 text-2xl'/>
                    </div>
                    <h2 className='text-xl text-stone-50 font-bold'>Users</h2>
                </div>

                <div className='w-[400px] h-[200px] bg-sky-500 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold text-stone-50 text-2xl'>
                            $6,200 <emsp/>
                            <span className='font-bold text-stone-50 text-lg'>
                                (40.9% &uarr;)
                            </span>
                        </span>
                        <HiDotsVertical className='text-stone-50 text-2xl'/>
                    </div>
                    <h2 className='text-xl text-stone-50 font-bold'>Product</h2>
                </div>

                <div className='w-[400px] h-[200px] bg-amber-400 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold text-stone-50 text-2xl'>
                            2.49% <emsp/>
                            <span className='font-bold text-stone-50 text-lg'>
                                (84.7% &uarr;)
                            </span>
                        </span>
                        <HiDotsVertical className='text-stone-50 text-2xl'/>
                    </div>
                    <h2 className='text-xl text-stone-50 font-bold'>Category</h2>
                </div>

                <div className='w-[400px] h-[200px] bg-pink-600 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold text-stone-50 text-2xl'>
                            44K <emsp/>
                            <span className='font-bold text-stone-50 text-lg'>
                                (-23.6% &darr;)
                            </span>
                        </span>
                        <HiDotsVertical className='text-stone-50 text-2xl'/>
                    </div>
                    <h2 className='text-xl text-stone-50 font-bold'>Orders</h2>
                </div>

            </div>
        </section>
    </>
  )
}
