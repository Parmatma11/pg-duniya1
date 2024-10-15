import Image from "next/image";
import React from 'react'
import Block from "./Block";
import Link from "next/link";

const Header1 = () => {
  return (
    <div className = 'flex justify-between border-b-2 border-grey-300 items-center h-30 px-10'>
      <Image src={'/kkaaa.svg'} alt="logo" width={100} height={100} className='w-28 h-28 border-r-4' 
      />
      <div className ="border-r-2 border-grey-300 h-full flex ">
        <Block title={'About Us'} para={''}/>
        <Block title={'Contact Us'} para={''}/>
        <div className="flex items-center px-3">
        <Image
        src={"/kkaaa.svg"}
        alt="demo"
        width={200}
        height={200}
        className=" w-10 h-10 rounded-full mr-5"
      />
      <Link href={'/login'}>
      <h3 className="font-bold"> login / signup </h3>
      </Link>

        </div>
      </div>
      
      
    </div>
  )
}

export default Header1
