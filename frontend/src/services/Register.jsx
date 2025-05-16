import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    esewaId: "",
    electricityId: "",
    waterId: "",
    wifiId: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        { withCredentials: true }
      );
      alert("Registered successfully!");
      console.log(res.data);
    } catch (err) {
      console.log("registration error", err);
      setMessage(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Personal Info */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="esewaId"
              placeholder="eSewa ID"
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="mt-4 border-t-2 pt-4 border-gray-100 ">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Utility IDs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="electricityId"
                placeholder="Electricity ID"
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="waterId"
                placeholder="Water ID"
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="wifiId"
                placeholder="WiFi ID"
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-semibold py-3 rounded-lg"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-500">{message}</p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
