import { use } from "react"

export default function Users ({fetchUser}) {
    const users = use(fetchUser)
    return (
        <div className="user">
            <h3>User: </h3>
        </div>
    )
}