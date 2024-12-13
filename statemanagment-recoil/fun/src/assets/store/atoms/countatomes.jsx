import {atom,selector} from "recoil"
export const countatom=atom({  //by the help of atom you make make your state 
    key:"countatom", //key is alway diff from other state
    default:1
})

//you this why we need this selector while we directiy use this in main App.jsx filr by get the value using useRecoilvalue and make some opration so you are right but when you make some large project at that time you relise that you need to do your operation inside selector and simply get to the main file(App.jsx)

//and also when you make a selector here then you not need to write this in main function again and again when you need you just simply discribe here one time and return you operation and use it again and again into your App.jsx file when you needed
export const even= selector({
    key:"even",
    get:({get})=>{
        const count=get(countatom)
        return count%2 ;//this return remander of count when divided by 2 in this case it return only 0,1
    }
})

//you think how to set value and how to get the value of state so don't worry here is solution
//1.)you can get the value in the App.jsx file by giving:- const ap=useRecoilvalue(countatom) this gives you the value of state countatom 
//2.)you can set value inside countatom by this :-const ap=useserRecoilstate(countatom)  this will update the value inside countatom state

//3.)and you see in some place useRecoilstate this make a state in that function where you use like:------------const[count,setcount]=useRecoilstate(countatom) this is also same when we created the state by using usestate
