

// export const messaging=atom({
//     key:"messaging",
//     default:12
// });
// export const network=atom({
//     key:"network",
//     default:102
// })
// export const jobs=atom({
//     key:"jobs",
//     default:0
// })
// export const notification=atom({
//     key:"notification",
//     default:0
// })
//seee remember one think when you want to do any operation with state you always do by the help of selector
//selector does smae thing that usememo dose it only calculate whe the depandency change and it not rerender you can use the value of selector anywhere in your main 
// export const selecto=selector({
// key:"sel",
// get:({get})=>{
// const op=get(messaging)//this selector not rerender untill this value means message value changes and this is depandency for this selector
// const og=get(notification)//this selector not rerender untill this value means notification value changes and this is depandency for this selector
// const oh=get(jobs)//this selector not rerender untill this value means message value job and this is depandency for this selector
// const or=get(network)//this selector not rerender untill this value means network value changes and this is depandency for this selector
// return or+oh+og+op
// }
// })


//dumb way to get the data from backend and count and put things
import { atom, selector } from "recoil";
export const notifications = atom({
  key: "notifications",
  default:{notification:1,
  messaging:1,
    job:1
} // Default state for notifications
});

export const headetsel=selector({
  key:"headetsel",
  get:({get})=> {
    const pp=get(notifications).messaging //get is a function and in recoil if you want to get a value from a object type data you first get(notification).messaging after close the get then upleft the object
   return pp+2;
  }

})



