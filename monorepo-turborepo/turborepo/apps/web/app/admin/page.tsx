import { Button } from "@repo/ui/button";
import {Admin} from "@repo/ui/admin";
export default function AdminPage() {
  return (
   <div>
   <Admin/>
   <Button children="click me" appName="3000"></Button>
   </div>
    );
    }