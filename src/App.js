import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const displayName = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  return (
    <div className="App">
      <form onSubmit={displayName}>
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input id="fName" onChange={handleChange}></input>
        <label>Last Name:</label>
        <input id="lName" onChange={handleChange}></input>
        <button>Submit</button>
        {show && <p>Full Name: {`${user.fName} ${user.lName}`}</p>}
      </form>
    </div>
  );
}

export default App;
