import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function SignUp() {
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_email: "",
    user_phone: "",
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
    const payload = {
      ...formData,
      user_lastname: "Doe",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };

    try {
      const response = await axios.post(
        "https://syoft.dev/Api/user_registeration/api/user_registeration",
        payload
      );

      if (response.data.status) {
        alert("Registration Successful");
        navigate("/login"); // Navigate to the login page
      } else {
        alert(response.data.msg); // Handle error message
      }
    } catch (error) {
      console.error("There was an error registering!", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_firstname"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="user_phone"
          placeholder="Phone"
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
