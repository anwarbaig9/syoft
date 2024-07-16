import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./DashboardPage.css";
import "./styles.css";
function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/loginpage");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/loginpage");
  };

  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="nav-container">
        <nav className="navbar">
          <div>
            <img
              src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1721069534/logo-color_flebfb.png"
              className="Logo"
              alt=""
            />
          </div>
          <div>
            <ul className="navbar-list">
              <li className="navbar-item">Home</li>
              <li className="navbar-item">Dashboard</li>
              <li className="navbar-item">Services</li>
              <li className="navbar-item">About</li>
              <li className="navbar-item">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
      <h1 className="heading">Transform. Accelerate. Scale. Optimize.</h1>
      <div className="dashboard-container">
        <div className="dashboard">
          <h1>Dashboard</h1>
          <p>Welcome, {user.user_firstname}!</p>
          <p>Email: {user.user_email}</p>
          <p>Phone: {user.user_phone}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;
