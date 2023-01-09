import React from "react";
import Image from "next/image";
const FourSection = () => {
  return (
    <div className="bg-primery p-4 lg:p-0 ">
      <div className="w-full  mx-auto  max-w-7xl flex lg:justify-between lg:flex-row flex-col   items-center lg:gap-8">
        <div className="text-white flex lg:flex-row flex-col    items-center lg:text-4xl text-2xl">
          <h2 className=" text-center">Simplify how your team works today</h2>
          <div className="z-10 ">
            <Image
              src="/fourpix.svg"
              alt="Main Section  Picture "
              width={520}
              height={400}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <a
              href="#"
              className=" inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-white px-6 py-3 text-base font-medium text-primery shadow-sm hover:bg-opacity-60"
            >
              Get Started
            </a>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default FourSection;
