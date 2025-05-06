import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Header from "./header"
import Links from './Links';

export const HeaderTwo = () => {
    const links = ['Wi-Fi', 'Postpaid', 'Prepaid', 'DTH', 'Airtel Black', 'Bank', 'Airtel Finance'];
    const [visible, setVisible] = useState(null);
    const [toggle, setToggle] = useState(false);
    return (

        <div className='max-w-[1260px]  mx-auto flex justify-between items-center bg-white border-b-[2px] border-gray-300  py-2  '>
            <div className='block md:hidden flex-1'>
                {!toggle ? <RxHamburgerMenu className='text-red-500 text-3xl duration-500 cursor-pointer pl-1' onClick={() => setToggle(!toggle)} />
                    :
                    <MdClose className='text-red-500 text-3xl cursor-pointer pl-1 duration-500' onClick={() => setToggle(!toggle)} />
                }
            </div>
            <div className='flex-1'>
                <svg className=" w-[70px] md:w-[110px] h-[50px] mr-auto"
                    viewBox="0 0 91 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"><path d="M39.4093 9.44411C38.5963 6.86804 37.0281 4.75022 34.7571 3.15458C34.4912 2.93875 31.6517 0.687378 26.3127 0.687378C19.3319 0.687378 12.8818 4.67237 9.25719 7.09654C6.32397 9.05802 0.46893 13.8272 1.02417 19.1667C1.27615 21.5884 2.80702 23.6359 6.36892 23.6885C9.28188 23.7315 12.7051 22.0162 14.6437 20.7421C17.6846 18.7433 22.1221 15.4881 26.4697 13.9329C28.6096 13.1677 29.7144 13.4804 30.0626 13.5652C31.1604 13.8152 31.9683 14.4368 32.4501 15.4184C33.2934 17.1268 33.1015 19.8212 31.9683 22.2903C30.4216 25.6563 27.7619 28.9741 24.0569 32.1591C22.1765 33.7763 20.4285 35.0295 18.8755 35.8814L18.7355 35.9561C18.0144 36.358 16.3645 37.2214 15.5491 37.4309C13.0907 38.0632 13.2699 36.9106 13.6054 36.1055C13.8023 35.6327 14.4538 34.8111 15.249 33.9775C15.6833 33.5364 16.1322 33.1262 16.5861 32.6882C18.0923 31.2356 19.7549 30.0065 19.6472 28.3697C19.539 26.7196 17.9612 25.6487 16.3126 25.6518C14.664 25.655 12.0739 26.7785 9.71556 30.2489C8.69878 31.7458 6.73296 35.696 8.71968 38.8145C9.5174 40.062 10.84 40.6924 12.6551 40.6873C13.9245 40.6873 15.4408 40.4177 17.1129 39.7538C22.0923 37.7765 27.3263 33.9389 30.1886 31.3838C34.7021 27.3544 37.4517 23.4739 39.0041 18.692C39.6309 16.7546 40.5204 12.9797 39.4093 9.44411Z" fill="#D40000"></path><path d="M58.97 11.2499C57.995 11.2499 57.1992 12.0341 57.1992 12.9968C57.1992 13.9772 57.9672 14.7469 58.9454 14.7469C59.9241 14.7469 60.6908 13.9804 60.6908 13.0088C60.7041 12.5474 60.5351 12.1088 60.2128 11.7752C59.89 11.4379 59.4487 11.2499 58.97 11.2499Z" fill="#D40000"></path><path d="M57.5693 26.5538H60.3152V15.621L57.5693 16.0691V26.5538Z" fill="#D40000"></path><path d="M51.5867 15.4266C50.2743 15.4266 49.0954 15.7975 47.8843 16.4001L47.574 16.559L48.3122 18.2046L48.7282 18.0078C49.5861 17.6242 50.4997 17.3672 51.3221 17.4008C52.3173 17.4413 52.7257 17.8983 52.7257 18.8508V19.4097H51.096C48.4819 19.4097 46.8529 20.7959 46.8086 22.9466C46.8086 24.9929 48.5123 26.7531 50.8846 26.7531C52.7985 26.7531 54.418 26.1328 55.5114 25.0378V19.2021C55.512 16.3596 53.4822 15.4266 51.5867 15.4266ZM52.7206 24.491C52.4515 24.6809 51.8976 24.8442 51.2955 24.8442C50.1913 24.8442 49.6943 23.9979 49.7127 23.0105C49.7317 22.1953 50.2407 21.2668 51.6196 21.2668H52.7206V24.491Z" fill="#D40000"></path><path d="M80.523 24.8252C79.7708 24.8252 79.2599 24.5784 78.9288 24.2189C78.4349 23.6841 78.2146 22.5897 78.2748 21.4226H84.1938V21.1491C84.1431 17.2743 82.8218 15.5103 79.9285 15.5103C76.7002 15.5103 75.4435 18.48 75.4194 21.2694C75.3985 23.0321 76.0633 24.8113 77.2846 25.8215C78.0247 26.4386 79.0516 26.7785 80.2431 26.7785C80.8946 26.7785 81.5708 26.6848 82.1899 26.4905C83.3789 26.124 84.2552 25.4873 84.2552 25.4873L83.4809 23.8942C83.3409 24.0005 82.1551 24.8252 80.523 24.8252ZM79.9285 17.5553C81.1491 17.5553 81.3283 18.8794 81.3283 19.7035H78.3564C78.4039 18.6439 78.8439 17.5553 79.9285 17.5553Z" fill="#D40000"></path><path d="M62.5129 17.58L62.5098 26.5627H65.3107V18.1066C65.6779 17.7515 66.4515 17.4382 67.1878 17.4097C67.8703 17.3819 68.3123 17.5249 68.3123 17.5249L69.0859 15.7875C68.7858 15.6375 68.0685 15.4558 67.2372 15.4558C66.0324 15.4552 64.1812 15.8071 62.5129 17.58Z" fill="#D40000"></path><path d="M90.0153 24.8322C88.8732 24.7449 88.6357 24.2436 88.6357 23.4088V12.5918L85.8823 13.0608V23.2296C85.8823 25.6405 87.191 26.6728 89.3815 26.6728C89.8501 26.6728 90.4319 26.5627 90.4319 26.5627V24.8373C90.4319 24.8373 90.1742 24.8455 90.0153 24.8322Z" fill="#D40000"></path><path d="M72.6415 12.6069L69.8267 13.0589V23.2777C69.8267 25.5658 71.1644 26.6487 73.4063 26.6487C73.9457 26.6487 74.4535 26.5481 74.4535 26.5481V24.848C74.4224 24.8455 74.2141 24.8455 74.0565 24.8385C72.8738 24.7993 72.6421 24.1473 72.6421 23.3941V17.6445H74.4535V15.6261H72.6421V12.6069H72.6415Z" fill="#D40000"></path></svg>
            </div>
            <div className="links flex-1  gap-2 ml-auto  md:flex  items-center justify-between   w-[700px]">
                <div className=' links hidden md:flex   items-center justify-between   w-[600px]'> {
                    links.map((link, idx) => (
                        <div >
                            <div
                                key={idx}
                                className='text-[13px] flex items-center gap-1 text-gray-700 cursor-pointer hover:text-red-500 group'
                            >
                                {link}
                                <FaAngleDown className='text-[10px] font-light text-gray-700 group-hover:text-red-500' />
                            </div>


                        </div>
                    ))
                }
                </div>
                <div>

                    <div className={`text-[13px] pr-1 flex  items-center justify-end gap-2 text-gray-700 cursor-pointer hover:text-red-500  group   `}
                        onMouseEnter={() => { setVisible(1) }} onMouseLeave={() => { setVisible(0) }}>

                        <VscAccount className='text-red-500 text-xl ' />
                        Account
                    </div>
                </div>

            </div>


            <div className={` duration-150 links text-gray-700 w-full h-screen  fixed bg-white ${toggle ? 'left-[0]' : 'left-[-100%]'}  top-[69px]  md:hidden  `}>
                <div className='px-4 border-b-[1px] border-gray-300' >
                    <Links />
                </div>
                <div className='p-4 flex flex-col gap-4 '>
                    {

                        links.map((link, idx) => (
                            <div >
                                <div
                                    key={idx}
                                    className='text-[13px] flex items-center gap-1  text-gray-700 cursor-pointer hover:text-red-500 group'
                                >
                                    {link}
                                    <FaAngleDown className='text-[10px] font-light text-gray-700 group-hover:text-red-500' />
                                </div>


                            </div>

                        ))
                    }
                </div>

            </div>


        </div>

    )
}
