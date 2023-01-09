import React from 'react'
import Image from "next/image";
const Profile = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto max-w-7xl ">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl lg:text-2xl  text-4xl font-medium title-font  mb-4">What they've said</h1>
    
     
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image
            src="/profile1.png"
            alt="Main Section  Picture "
            width={700}
            height={700}
          />
        </div>
        <div class="flex-grow">
          <h1 class=" lg:text-lg  text-3xl title-font font-medium mb-3">Anisha Li</h1>
          <p class="leading-relaxed text-base ">SManage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.</p>
       
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image
            src="/profile2.png"
            alt="Main Section  Picture "
            width={700}
            height={700}
          />
        </div>
        <div class="flex-grow">
          <h1 class="lg:text-lg  text-3xl title-font font-medium mb-3">Ali Bravo</h1>
          <p class="leading-relaxed text-base">We have been able to cancel so many other subscriptions since using Manage.There is no more cross- channel confusion and everyone is much more focused..</p>
         
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image
            src="/profile3.png"
            alt="Main Section  Picture "
            width={700}
            height={700}
          />
        </div>
        <div class="flex-grow">
          <h1 class="lg:text-lg  text-3xl title-font font-medium mb-3">Richard Watts</h1>
          <p class="leading-relaxed text-base">Manage allows us to provide structure and process.It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!</p>
         
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-primery border-0 py-2 px-6 focus:outline-none  rounded-full  font-semibold text-lg">Get started</button>
  </div>
</section>
  )
}

export default Profile