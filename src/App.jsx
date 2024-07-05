import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
function App() {
  // const [count, setCount] = useState(0)
  const actors = ['sakib','raj','jasim','Rubel','Salman Shah'];
  const singers = [
    {id: 1, name: 'Dr.Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom Vai', age: 28}
  ]

  return (
    <>

      <h1>Vite + React</h1>
       
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }









       <Actor name={"Bappa Raz"}></Actor>
       {
        actors.map(actor =><Actor name={actor}></Actor>)
       }



      {/* <Actor name={"Bappa Raz"}></Actor>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore React Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}




      {/* <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="12" score="85"></Student>
      <Student ></Student>
      <Developer></Developer>
      <Device name="Laptop" price="60000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="170"></Device> */}


    </>
  )
}
function Person() {
  const age = 21;
  const money = 20;
  const person = { name: 'mostafa', age: 22 }
  return (
    <h3>I am {person.name} with age : {age + money}</h3>
  )

}
function Device(pros) {
  // console.log(pros)
  return (
    <h2>This device: {pros.name} price: {pros.price}</h2>
  )
}
// Efficitent style used in student function
const { grade, score } = { grade: '7', score: '99' };
function Student({ grade, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is Student</h3>
      <p>class :{grade}</p>
      <p>score :{score}</p>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Dev Opps</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
