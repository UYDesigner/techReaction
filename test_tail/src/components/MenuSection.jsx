import React from 'react'

const MenuSection = () => {
    const menu = ['WiFi', 'Postpaid', 'Prepaid', 'DTH', 'Airtel Black'];
    const menuIcons = ['../Images/wifi.gif', '../Images/wifi.gif', '../Images/wifi.gif', '../Images/wifi.gif', '../Images/wifi.gif']
    return (
        <div className="w-full bg-gray-100 flex items-center justify-center">
            <div className="w-[1260px] grid place-items-center gap-3 py-5">
                <div className="heading text-2xl md:text-4xl font-bold text-gray-900">
                    Buy a new connection
                </div>
                <div className="imgsec grid grid-cols-3  sm:grid-cols-3 md:grid-cols-5 gap-4 my-4 place-items-center">
                    {menu.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center  p-4 cursor-pointer hover:shadow-lg transition">
                            <img src={menuIcons[idx]} alt={item} className="w-[50px] h-[50px] object-contain mb-2" />
                            <p className="text-gray-800 text-sm font-medium">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="sticker border-1 border-gray-400 p-3 rounded-2xl flex gap-4 items-center bg-white my-4  ">
                    <div className="left flex gap-2 items-center">
                        <div className="img">
                            <img src="../Images/switch.png" alt="" srcset="" className='w-[60px]' />
                        </div>
                        <div className="script text-gray-700 ">
                            <p className='font-semibold text-[13px] md:text-[15px]'>Switch to airtel</p>
                            <p className='text-[11px]  md:text-[12px]' >Select a plan & order SIM • Get SIM home-delivered</p>
                        </div>
                    </div>
                    <div className="right border-1 border-gray-800 p-2 rounded-4xl font-semibold cursor-pointer text-[12px]">
                        Get started
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSection