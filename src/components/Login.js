import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://syoft.dev/Api/userlogin/api/userlogin",
        formData
      );
      if (response.data.status) {
        const userData = response.data.user_data[0]; // Extract user data
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/dashboard");
      } else {
        alert(response.data.msg); // Handle error message
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="user_password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
