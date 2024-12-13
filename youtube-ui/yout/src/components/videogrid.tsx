import {Videocard} from "./videocard"
const Video=[{
    title:"jharkingh new blogtext  kdnjndjdnjdn aligment",
    thamnailimage:"Ph.png",
    icon:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s176-c-k-c0x00ffffff-no-rj",
    chname:"harkirat singh",
    view:"10M",
    timestamp:"10 day ago"
},{
    title:"jharkingh new blog abo ",
    thamnailimage:"Ph.png",
    icon:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s176-c-k-c0x00ffffff-no-rj",
    chname:"harkirat singh",
    view:"10M",
    timestamp:"20 day ago"
},{
    
        title:"jharkingh new blo  witht",
        thamnailimage:"Ph.png",
        icon:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s176-c-k-c0x00ffffff-no-rj",
        chname:"harkirat singh",
        view:"10M",
        timestamp:"20 day ago"
    
},{
    title:"jharkingh new blogn witht",
    thamnailimage:"Ph.png",
    icon:"https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s176-c-k-c0x00ffffff-no-rj",
    chname:"harkirat singh",
    view:"10M",
    timestamp:"20 day ago"
}
]

export const Videogrid=()=>{
return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
 {Video.map((video)=>
 <Videocard title={video.title} 
 thamnailimage={video.thamnailimage} 
 icon={video.icon} 
 chname={video.chname} 
 view={video.view}
 timestamp={video.timestamp}>
 </Videocard>
)}
</div>
}


