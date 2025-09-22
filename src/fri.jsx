export default function Fri ({friend}) {
    const {name,email,address} = friend;
    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
        </div>
    )
}