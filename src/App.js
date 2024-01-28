import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [showFullName, setShowFullName] = useState(false);

  const handleInputChange = (e) => {
    if (showFullName) setShowFullName(false);
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName !== "" && user.lastName !== "") {
      setShowFullName(true);
    } else {
      setShowFullName(false);
      alert("Please fill out both first name and last name fields.");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={user.firstName}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={user.lastName}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showFullName && (
        <p>
          Full Name: {user.firstName} {user.lastName}
        </p>
      )}
    </div>
  );
}

export default App;
