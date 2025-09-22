
import { Suspense, useState } from 'react'
import './App.css'
import Counter from './counter'
import Batsman from './batsman'
import Users from './user'
import Freinds from './freind'

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const freindPromise = fetchFriends();
  function handleClick() {
    alert('this is click 1.')
  }
  const handleClick3 = () => {
    alert('this is click 3')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }


  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>Freinds are coming for a treat....</p>}>
        <Freinds freindPromise = {freindPromise}></Freinds>
      </Suspense>
      {/* <Suspense fallback={<p>Loading User Data....</p>}>
        <Users fetchUser = {fetchUser}></Users>
      </Suspense> */}
      

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={function handleClick2() {
        alert('this is btn-2')
      }}>Click 2</button>
      <button onClick={() => { alert('what is this') }}>Click 4</button>
      <button onClick={() => handleAdd5(5)}>Click 5</button>
    </>
  )
}

export default App
