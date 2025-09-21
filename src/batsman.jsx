import { useState } from "react"



export default function Batsman () {
    const [runs, setRuns] = useState(0);
    const handleSingles = () => {
        const newRun = runs + 1;
        setRuns(newRun)
    }
    const handleFours = () => {
        const newRun = runs + 4;
        setRuns(newRun)
    }
    const handleSixes = () => {
        const newRun = runs + 6;
        setRuns(newRun)
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            {
               runs >= 50 && <p><small>You Score: 50</small></p>
               
            }
            {
               runs >= 100 && <p><small>You Score: 100</small></p>
               
            }
            <p>Score: {runs}</p>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFours}>Four</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    )
}