import {Searchbar} from "@/components/suarchbar"

export function Appbar(){
return<div className="flex justify-between">
<div className="flex  text-xl font-bold text-red-700 pt-1">
          <img className=" h-10 w-10 rounded-xl" src="you.png"></img>  YouTube
        </div>
<div className="pt-1" ><Searchbar></Searchbar></div>
<div className="pr-4"><button type="submit" class="w-full  border-gray-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">Sign in</button></div>
    </div>
}