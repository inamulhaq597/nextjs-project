import React from "react";
import Image from "next/image";
const MainSection = () => {
  return (
    <div className="mx-auto  max-w-7xl pb-24 ">
      <div className="flex items-center lg:flex-row flex-col ">
        <div className=" text-center lg:text-left lg:w-1/2 order-2 lg:order-1 p-6">
          <h1 className="font-bold lg:text-5xl  text-3xl leading-tight mb-8">
            Bring everyone together to build better products.
          </h1>
          <p className="mb-8 text-xs">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <div className="">
            <a
              href="#"
              className=" inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-primery px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-60"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:w-1/2">
          <Image
            src="/mainpix.svg"
            alt="Main Section  Picture "
            width={700}
            height={700}
          />

          <div className="  w-screen  h-screen object-contain absolute top-[6rem] lg:pl-12 pl-16 lg:left-96 right-0 lg:translate-x-1/4 -translate-y-1/4    -z-10">
            <Image
              src="/mainpix2.svg"
              alt="Main Section  Picture "
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
