"use client"

// you should deffer the use clint as much as possible
// because it will make your component client component and it will not be server component so the use of next is SEO optimized is not implemented

export const Button=()=>{
    return<div>
         <button onClick={()=>{alert("hi from signup")}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    </div>
}