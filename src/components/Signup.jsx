import React from "react";
import "../styles/signup.css";

function Signup() {
      const handleSignup = (e) => {
    e.preventDefault();
    // Redirect to Home page (replace with your actual path)
    window.location.href = "/Home,jsx"; 
  };

  return (
    <div className="signup-container">
      {/* Signup box */}
      <div className="signup d-flex justify-content-center align-items-center vh-100">
        <div className="signup-box p-4 rounded shadow-lg">
          <h3 className="signup-title text-center mb-4">Signup</h3>
          <form onSubmit={handleSignup}> 
            <div className="mb-3">
              <label>Full Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm password" />
            </div>
            <button type="submit" className="btn galaxy-btn" >Signup</button>
            <p className="text-center mt-3 login-link">
                Already have an account? <a href="#">Login</a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
