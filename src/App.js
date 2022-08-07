import React, { useState } from 'react';

import './App.css';

export default function App() {

const [fName, setFName] = useState("");

const [lName, setLName] = useState(""); 

function updateFName(event) {
  const firstName = event.target.value;
  setFName(firstName);
}

function updateLName(event) {
  const lastName = event.target.value;
  setLName(lastName);
}

  return (
    <div className="container">
      <h1> Hello {fName} {lName} </h1>
      <form>
        <input 
        name="fName" 
        placeholder="First Name"
        value={fName}
        onChange={updateFName}
         />
        <input 
        name="lName" 
        placeholder="Last Name" 
        value={lName}
        onChange={updateLName}
        />
        <button > Submit </button>
      </form>
    </div>
  );
}


