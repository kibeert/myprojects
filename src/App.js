import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Train from './car';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
      <h1>React is {5+5} times better with JSX</h1>
      <h1>{myElent}</h1>
      <h2>{Car}</h2>
      {Bus()}
      {Football()}
      {Garage()}
      {MyForm()}
      {myForm2()}
      
      <Train />
    </div>
    
  );
}
const x = 7;
let text = "Goodbye";
if (x<10){
  text = "Hello";
}
const myElent = <h1>{text}</h1>;
//react components
//class component
class Car extends React.Component{
  render(){
    return <h2>Hi, I am a Car!</h2>
}
};

function Bus(){
  return <h2>Hi, I am a Bus!</h2>;
}

const hey = <Car brand = "Ford"/>
function Rar(props){
  return <h2>Hi, I am a {props.brand}!</h2>;
}
function Football(){
  const shoot = () =>{
    alert("Great shoot");
  }

  return(
    <button onClick={shoot}>Take the shot</button>
  )
}

function Brand(props){
  return <li>I am a { props.brand}</li>;

}

function Garage(){
  const cars = ['Ford', 'BMW', 'AUDI'];
  return(
    <>
    <h1>Who lives in my garage</h1>
    <ul>
      {cars.map((car) => <Car brand = {car} />)}
    </ul>
    </>
  )
}

function MyForm(){
  const [name, setName] = useState("");

  return(
    <form>
      <label>Enter your name:
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} >
        
        </input>
      </label>
    </form>
  )
}

function myForm2(){
  const [username, setUsername]= ("");

  return(
    <form>
      <label>Enter your username</label>
      <input type='text' name='{username}' onChange={(e)=>setUsername(e.target.value)}></input>
    </form>
  )
}
export default App;



