import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("dr"); // Default value
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to indicate loading
  const [error, setError] = useState(null); // State to hold any errors

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    const data = {
      userId,
      password,
      role,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const jsonResponse = await response.json();
      setResponseData(jsonResponse); // Update response data state
      console.log("Login response:", jsonResponse);
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message); // Set the error message
    } finally {
      setIsLoading(false); // Set loading state to false after request finishes
    }
  };

  // Handle the response data rendering after login:
  useEffect(() => {
    if (responseData) {
      // Display the data using appropriate methods based on your UI framework
      console.log("Displaying Login Response:", responseData);
      // You can use techniques like state management (e.g., Redux) or component state
      // to manage the display of this data in your UI.
    }
  }, [responseData]); // Re-run effect when responseData changes

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to HealthOneSolutions</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your user ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Category</label>
            <select
              className="form-control"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="dr">Doctor (dr)</option>
              <option value="pt">Patient (pt)</option>
              <option value="ad">Admin (ad)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Login</button>
          <button type="button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
