import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-primeryfooter">
      <div className=" mx-auto  max-w-7xl  flex  lg:flex-row flex-col ">
        <div className=" lg:w-1/2  lg:p-2 pt-10 ">
          <div className="lg:pb-20 pb-6  w-full  flex justify-center lg:justify-start">
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div className="flex justify-center lg:justify-start pb-5 lg:pb-0 space-x-6">
            <a>
              <Image
                src="/facebook.svg"
                alt="Picture of the author"
                width={25}
                height={120}
              />
            </a>
            <a>
              <Image
                src="/instagram.svg"
                alt="Picture of the author"
                width={25}
                height={120}
              />
            </a>
            <a>
              <Image
                src="/pinterest.svg"
                alt="Picture of the author"
                width={25}
                height={120}
              />
            </a>
            <a>
              <Image
                src="/twitter.svg"
                alt="Picture of the author"
                width={25}
                height={120}
              />
            </a>
          </div>
        </div>
        <div className=" lg:w-1/3  flex pb-8 lg:pb-0 lg:justify-start justify-center lg:items-center lg:text-left text-center  ">
          <ul className="space-y-3">
            <li className="text-white hover:text-primery text-lg">Home</li>
            <li className="text-white hover:text-primery text-lg">Pricing</li>
            <li className="text-white hover:text-primery text-lg">Product</li>
            <li className="text-white hover:text-primery text-lg">About Us</li>
          </ul>
        </div>
        <div className=" lg:w-1/3  flex  lg:justify-start justify-center lg:items-center lg:text-left text-center">
          <ul className="space-y-3">
            <li className="text-white hover:text-primery text-lg">Careers</li>
            <li className="text-white hover:text-primery text-lg">Community</li>
            <li className="text-white hover:text-primery text-lg">
              Privacy Policy
            </li>
            <li className="text-primeryfooter text-lg">About Us</li>
          </ul>
        </div>
        <div className=" lg:w-1/2 p-8">
          <div className="pb-10 flex space-x-3">
            <div className="w-[75%] ">
              <input
                className="w-full rounded-full p-3"
                placeholder="Update in your index ..."
              ></input>
            </div>
            <div className="text-white p-2 flex justify-center items-center  font-bold bg-primery w-[20%] rounded-full">
              Go
            </div>
          </div>
          <div className="w-full text-center lg:text-left"><p>Copyright 2023. All Rights Reserved</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
