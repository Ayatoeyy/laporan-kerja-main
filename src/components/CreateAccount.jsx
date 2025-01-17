import React, { useState } from 'react';

const CreateAccount = () => {
  // State to store input values for name, email, and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to store the created account
  const [newAccount, setNewAccount] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new account object
    const account = {
      name,
      email,
      password
    };

    // Store the new account in state
    setNewAccount(account);

    // Optionally, you can store the new account in localStorage or send it to a backend API
    // localStorage.setItem('user', JSON.stringify(account));
    
    // Reset the form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="create-account-container">
      <h2>Create New Account</h2>

      {/* Account creation form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>

      {/* Display the newly created account if available */}
      {newAccount && (
        <div className="account-info">
          <h3>Account Created:</h3>
          <p><strong>Name:</strong> {newAccount.name}</p>
          <p><strong>Email:</strong> {newAccount.email}</p>
          <p><strong>Password:</strong> {newAccount.password}</p>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;
