 export  function Pp({amount,odercount}){
    return( 
  
  <div >
      <div className='grid grid-cols-1  bg-white-600 shadow-md rounded-lg  '>
        <div className=' flex col-span-1'>Amount Pending<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
  </svg>
   </div>
  
  
   <div className="flex col-span-1 text-base pt-3 justify-between">
    <div className="flex">
    <span className="ml-2 font-semibold h-4">₹{amount}</span> 
    </div>
    <div className="flex">
      <span className="mr-1 underline decoration-blue-600 text-blue-400 cursor-pointer">{odercount} Order</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  
  
  
  </div>
     </div>
  
  
    )
  }