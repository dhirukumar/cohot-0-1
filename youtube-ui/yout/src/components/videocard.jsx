

export function Videocard({title,thamnailimage,icon,chname,view,timestamp}){
    return <div className="grid grid-cols-12 ">
        
            <div className="col-span-12">
            <img className="pt-2 cursor-pointer " src={thamnailimage}></img>
            </div>
            <div className="col-span-12"><div className="grid grid-cols-10">
                <div className="col-span-10 flex flec-cols">
                <img className="rounded-md h-10 w-10 " src={icon}></img><div className="">
                <div className="ml-2 text-xl not-italic leading-tightl ">{title}</div><div className="ml-2  text-sm text-gray-400 ">{chname}</div><div className="ml-2 text-xs text-gray-500">{view}|{timestamp}</div></div>
                </div></div>
                </div> 
        </div>
   
} 





{/* <div className="grid grid-cols-12 grid-rows-16">
<div className="col-span-12 row-span-4 ">
    <img className="rounded-lg" src="/ph.png"></img>
</div>
<div className="row-span-2 col-span-2"><img className="h-10 w-30" src="https://yt3.googleusercontent.com/Q5wDZkznd7zSD2RWT3HU9sqbwNkkkJtXgTxulaJoLAEl-U9-gbcIm6Of1rASj9RBotOedTih=s160-c-k-c0x00ffffff-no-rj"></img></div>
<div className="col-span-10 text-2xl font-sans ">new songs</div>
<div className=" row-span-1 text-gray-400">harkirat singh</div>
<div className=" row-span-1 text-gray-400">111M view | 13 day ago</div> */}