import { use } from "react"
import Fri from "./fri";

export default function Freinds ({freindPromise}) {
    const user = use (freindPromise);
    console.log(user)
    return (
        <div className="user">
            <h3>Freinds : {user.length}</h3>
            {
                user.map(friend => <Fri key={friend.id} friend = {friend}></Fri>)
            }
            <p></p>
        </div>
    )
}