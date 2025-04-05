//now without anu "use client" we have server component so it is SEO optimized
// see there are two type of component in Next.js 1. server component and 2. client component
//by default all component are server component means they only send html to the client
// to make a component client component we need to add "use client" at the top of the file
// this is make your component intactive and you can use state and other react features like in this example we use onclick so for that we need to make this component client component

import { Button } from "./button";

export const Signinn=()=>{
    return<div>
    <div>
            <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
                        <LabelledInput label="Password" type={"password"} placeholder="123456" />
                    <Button/>
                    </div>
                </div>
            </a>
        </div>
    </div>
        </div>
    
       </div>
      }

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
  }
  
  function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
  }