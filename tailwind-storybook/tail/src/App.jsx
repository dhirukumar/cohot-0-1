import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Pp} from '../Component.jsx'

function App() {
  return (
<div className='grid grid-cols-6 gap-3'>
<div className='col-span-6 pl-2 pt-1 sm:col-span-6 md:col-span-3 lg:col-span-2 pr-2'><Op></Op></div>
<div className='col-span-6 pl-2 pt-1 sm:col-span-6 md:col-span-3 lg:col-span-2 pr-2'><Pp amount={"20,19,000"} odercount={23} ></Pp></div>
<div className='col-span-6 pl-2 pt-1 sm:col-span-6 md:col-span-3 lg:col-span-2 pr-2'><La></La></div>
</div>
      
  )
}

function Op(){
  return( 

<div >
    <div className='grid grid-cols-1  bg-blue-600 rounded-lg  '>
      <div className=' flex col-span-1'>Next Payout<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

 </div>
 <div className="flex col-span-1 text-base pt-3 justify-between">
  <div className="flex">
  <span className="ml-2">₹ 2,222.02</span> 
  </div>
  <div className="flex">
    <span className="mr-1">23 Order</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
  </div>
</div>

<div className="flex col-span-1 pt-6 justify-between bg-blue-600 rounded-b-lg  ">
  <div>Next Payment Date</div>
  <div className="flex">Today, 4:00PM</div>
  </div>

</div>
   </div>


  )
}

function La(){
  return <div>
    <div className='grid grid-cols-1  bg-white-300 shadow-md rounded-lg  '>
      <div className=' flex col-span-1'>Next Payout<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

 </div>
 <div className="flex col-span-1 text-base pt-3 justify-between">
  <div className="flex">
  <span className="ml-2">₹ 2,222.02</span> 
  </div>
  <div className="flex">
    <span className="mr-1">23 Order</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
  </div>
  </div>
  </div>
  </div>
}

    {/* gred responsive
  <div className="grid grid-cols-12">
  <div className=" col-span-12 lg:col-span-4 bg-slate-500 md:col-span-6 rounded-full ">jnjdndjnd</div>
  <div className=" col-span-12 lg:col-span-4 bg-yellow-400  md:col-span-6 ">jnjdndjnd</div>
  <div className=" col-span-12 lg:col-span-4 bg-red-800  md:col-span-6 ">jnjdndjnd</div>
</div> */}
{/* col-span-12( at prefix alway give the how many col-span take firest this target sm or xs you just need to discribe for md and lg and xlg) */}
{/* flex and responsive */}
       {/* <div className='flex  flex-wrap'>
        <div className= 'w-[100%] bg-slate-800 lg:w-[33%] md:w-[50%] '>jbjdbjdb</div>
        <div className= 'w-[100%] bg-red-300 lg:w-[33%] md:w-[50%] '>jbjdbjdb</div>
        <div className='w-[100%] bg-slate-800 lg:w-[33%] md:w-[50%] '>jbjdbjdb</div>
       </div> */}
   



//notes:-
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px}
export default App
