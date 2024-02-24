import React, { useState } from 'react';
import "../app.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }

    try {
      const response = await fetch('your-api-endpoint-for-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful registration, such as redirecting to a new page
        console.log('User registered successfully!');
      } else {
        // Handle registration error
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };


  return (
    <div className="registrationapp">
      <p className="title">Registration Form</p>
      <form className="registration" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Write your name..." required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Write your email..." required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Write your password..." required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password..." required />
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </div>
  );
}

export default Registration;