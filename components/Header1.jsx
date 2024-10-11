import Image from "next/image";
import React from 'react'
import Block from "./Block";
import Link from "next/link";

const Header1 = () => {
  return (
    <div className = 'flex justify-between border-b-2 border-grey-300 items-center h-24 px-10'>
      <Image src={'/logo.png'} alt="logo" width={150} height={150} className='w-28 h-28' 
      />
      <div className ="border-r-2 border-grey-300 h-full flex">
        <Block title={'Become a Member'} para={'additional 10%off on stays'}/>
        <Block title={'Become a Member'} para={'additional 10%off on stays'}/>
        <Block title={'Become a Member'} para={'additional 10%off on stays'}/>
        <Block title={'Become a Member'} para={'additional 10%off on stays'}/>
        <div className="flex items-center px-3">
        <Image
        src={"/demo.svg"}
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
