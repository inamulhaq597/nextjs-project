import React from "react";
import Image from "next/image";
const SecoundSection = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl ">
        <div className="flex lg:flex-row flex-col  ">
          <div className=" lg:w-1/2 p-6">
            <h1 className="font-bold lg:text-4xl text-3xl text-center  lg:text-left leading-tight mb-8">
              What’s different about Manage?
            </h1>
            <p className="mb-8 text-center  lg:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className=" lg:w-1/2 p-6">
            <div className=" lg:pb-24 ">
              <div className="flex space-x-3 lg:pb-4">
                <div className="rounded-full  w-[15%] text-white font-bold flex justify-center items-center p-3  bg-primery ">
                  01
                </div>
                <div className=" w-[80%]  font-bold flex justify-start items-center  text-lg   ">
                  <h1>Track company- wide progress</h1>
                </div>
              </div>
              <div className="w-full flex lg:justify-end  text-justify lg:pr-24">
                <div className="lg:w-[80%]  ">
                  <p className="  font-semibold p-8 lg:p-0">
                    See how your day - to - day tasks fit into the wider
                    vision.Go from tracking progress at the milestone level all
                    the way done to the smallest of details.Never lose sight of
                    the bigger picture again.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
         
             <div className=" lg:pb-24 ">
              <div className="flex space-x-3 lg:pb-4">
                <div className="rounded-full  w-[15%] text-white font-bold flex justify-center items-center p-3  bg-primery ">
                02
                </div>
                <div className=" w-[80%]  font-bold flex justify-start items-center  text-lg   ">
                  <h1>Advanced built -in reports</h1>
                </div>
              </div>
              <div className="w-full flex lg:justify-end  text-justify lg:pr-24">
                <div className="lg:w-[80%]  ">
                  <p className="  font-semibold p-8 lg:p-0">
                  Set internal delivery estimates and track progress toward
                    company goals.Our customisable dashboard helps you build out
                    the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
         
             <div className=" lg:pb-24 ">
              <div className="flex space-x-3 lg:pb-4">
                <div className="rounded-full  w-[15%] text-white font-bold flex justify-center items-center p-3  bg-primery ">
                03
                </div>
                <div className=" w-[80%]  font-bold flex justify-start items-center  text-lg   ">
                  <h1>Everything you need in one place</h1>
                </div>
              </div>
              <div className="w-full flex lg:justify-end  text-justify lg:pr-24">
                <div className="lg:w-[80%]  ">
                  <p className="  font-semibold p-8 lg:p-0">
                  Stop jumping from one service to another to communicate,
                    store files,track tasks and share documents.Manage offers an
                    all -in -one team productivity solution.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SecoundSection;
