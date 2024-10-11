"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-20  border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center">
        <Image
          src={"/fire.png"}
          alt="fire"
          width={100}
          height={100}
          className=" w-32 h-32 rounded-full mr-5"
        />
        <div className=" text-s">
          <p className=" font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
        <div className="flex">
            <input type="email" className="px-6 py-3 rounded-lg mr-5 w-80 h-12 outline-none border border-gray-300" placeholder="e.g. john@gmail.com"/>
            <button type="submit" className=" w-40 rounded-lg h-12 bg-red-500 text-xl text-white cursor-pointer ">Notify</button>
        </div>
    </div>
  );
};

export default Header4;
