import { Appbar } from "../component/appbar";
import { Balance } from "../component/Balance";
import { Users } from "../component/Users";
export function Dashboard(){
    return<div>
        <Appbar></Appbar>
        <Balance></Balance>
        <Users></Users>
    </div>
}