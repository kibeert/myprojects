import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Train from './car';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./src/pages/Layout";
import Home from "./src/pages/Home";
import Blogs from "./src/pages/Blogs";
import Contact from "./src/pages/Contact";
import Nopage from "./src/pages/Nopage";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
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

function MyForm2(){
  const [username, setName]= useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${username}!`);
  }

  return(
    <form>
      <label>Enter your username
      <input type='text' name='{username}' onChange={(e)=>setName(e.target.value)}/>
      </label>
      <input type='submit'/>
    </form>
  )
}



