import React from 'react';


export default function Navbar({ onSave }) {
  const handleSave = () => {
    // Call the onSave function to save the notes
    onSave();
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href ="/register">register</a>
        </li>

        <li>
          <button onClick={handleSave}>Save</button>
        </li>
      </ul>
    </nav>
  );
}
