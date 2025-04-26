
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
