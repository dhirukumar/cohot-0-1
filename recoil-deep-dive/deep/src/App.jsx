// import { messaging,notification,network, jobs, selecto} from './atom/state'
// import { RecoilRoot, useRecoilValue } from 'recoil'
// import './App.css'


// function App() {
// return(
//   <div>
// <RecoilRoot>
//   <Mainapp/>
// </RecoilRoot>
//   </div>
// )
// }

// function Mainapp(){
//   const mess=useRecoilValue(messaging);
//   const finalmess= mess>=100 ? "99+":mess
//   const noti=useRecoilValue(notification);
//   const finalnoti= noti>=100 ? "99+":noti
// const job=useRecoilValue(jobs) //the name you store value is not same the name of your state from where you get your value 
// const finaljob=job>=100 ? "99+":job
// const net=useRecoilValue(network);
// const finalnet= net>=100 ? "99+":net

// const value=useRecoilValue(selecto)
//   return (
//   <div>
//      <button style={{"marginLeft":50,"marginTop":10,"borderRadius":10}}>Home</button>
//      <button style={{"marginLeft":50,"marginTop":10,"borderRadius":10}}>My Network ({finalnet})</button>
//      <button style={{"marginLeft":50,"marginTop":10,"borderRadius":10}}>Jobs ({finaljob})</button>
//      <button style={{"marginLeft":50,"marginTop":10,"borderRadius":10}}>Message({finalmess})</button>
//      <button style={{"marginLeft":50,"marginTop":10,"borderRadius":10}}>Notifiaction({finalnoti})</button>
//      <button style={{"marginLeft":50,"marginTop":10,"borderRadius":10}}>me({value})</button>
//   </div> 
//   )
// }

//dumb way to do fetch data from backend and update it

// 
import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { notifications,headetsel } from "./atom/state"; // Import the notifications atom

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}
function Main() {
  // const [notification, setnotification] = useRecoilState(notifications);
  const setnotification=useSetRecoilState(notifications)
  useEffect(() => {
    fetch("http://localhost:3000/notification")
      .then(async (res) => {
        const data = await res.json();
        console.log(data)
        // setnotification({notification:data.notification}); // Update the notification state with fetched data
        setnotification({notification:data.notification,messaging:data.messaging,job:data.job})//don't repite the setnotification to set each itams
      
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [notifications]);
 const op=useRecoilValue(notifications).notification
 const pp=useRecoilValue(headetsel)
 const pt=useRecoilValue(notifications).job
  return (
    <div>
      <button>Notification({op})</button>
      <button>message({pp})</button>
      <button>Job({pt})</button>

    </div>
  );
}

export default App;
