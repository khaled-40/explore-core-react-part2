
import { useState } from 'react'
export default function Counter() {

    const [count, setCount] = useState(0);

    const counterStyle = {
        border: '2px solid gold',
        borderRadius: '10px'
    }
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div style={counterStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}