import React from 'react'
import Link from './Links';
import { CgMenuGridO } from 'react-icons/cg';

const header = () => {
    return (
        <div className=' border-b-[0.1px] border-gray-300  '>
            <div className='max-w-[1260px]  mx-auto  hidden md:flex  '>
                
                    <Link />
                    <div className="right ml-auto  flex  items-center justify-between  w-[130px]  mx-1 cursor-pointer">
                        <CgMenuGridO className='text-[18px]  font-[650]  text-gray-700 items-center  ' />
                        <span className='text-[15px] font-[500] text-gray-700'>Explore AirNet</span>

                    </div>
                
            </div>
        </div>
    )
}

export default header