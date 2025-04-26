//COUNTER APP IMPORTS
/*import './App.css'
import {useState} from 'react';*/

//-_-----------++-+--COUNTER APP-------------------++++++++
/*function Button({text, onClick}){
  
  return(
      <button className="buuton" onClick={onClick} >{text}</button>
  );
}*/

 //function App() {
 /*const [count, setCount] = useState(0);
 //const [message, setMessage] = useState('');   // message to show errors or limit notices

 
 //Event handler for the decrement function 
 function decrement(){
   if (count <= 0) {
      setMessage("Can't go below 00"); // Show message if limit reached
    } else {
      setCount(count - 1);               // decrease the count
     // setMessage('');                    // Clear any previous message
    }
  };
  
  //Event handler for the increasing function
  function increment(){
    if (count >= 1000) {
      setMessage("Can't go above 1000"); // Show message if limit reached
    } else {
      setCount(count + 1);               // Increase the count
     // setMessage('');                    // Clear any previous message
    }
    }*/
    
    /*return (
    <>
      <h1>Click Counter App</h1>
      <div className = "container">
        <h2> {count} </h2>
      </div>
       {/* Display message only if it's not empty /}
      {message && <p>{message}</p>}
      <Button text = "Add up" onClick = {increment} />
      <Button text = "Subtract" onClick = {decrement} />
      
    </>
  )
}


export default App;
*/   
//---------------- ^^^^^^^COUNTER APP^^^^^^^^^^^-----------






import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List'; // Import the reusable List component


function App() {
  // State for fetched users
  const [users, setUsers] = useState([]);

  // State for loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data on component mount
  useEffect(() => {
    // Start fetching
    fetch('http://localhost:3000/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users.');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);      // Store data in state
        setLoading(false);   // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Store error message
        setLoading(false);     // Stop loading
      });
  }, []); // Empty dependency array = run once on mount

  return (
    <main /*style={{ padding: '20px', fontFamily: 'Arial' }}*/>
      <h1>User List</h1>

      {/* Show loading indicator */}
      {loading && <p>Loading users...</p>}

      {/* Show error if any */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Render the reusable List only if not loading or error */}
      {!loading && !error && (
        <List
          items={users}
          renderItem={(user) => (
            <div>
              <strong>{user.name}</strong> — <em>{user.email}</em> -- <strong>{user.username}</strong>
            </div>
          )}
        />
      )}
    </main>
  );
}

export default App;