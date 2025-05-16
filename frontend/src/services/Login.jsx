import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [esewaId, setEsewaId] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        { esewaId },
        { withCredentials: true }
      );

      const sessionToken = res.data.sessionToken;

      if (sessionToken) {
        localStorage.setItem("sessionToken", sessionToken);

        toast.success("Login successful!", {
          className: "bg-green-600 text-white font-medium rounded-lg",
        });

        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1500); // Delay to show toast before redirect
      } else {
        toast.error("Session token not received.", {
          className: "bg-red-600 text-white font-medium rounded-lg",
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed", {
        className: "bg-red-600 text-white font-medium rounded-lg",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          name="esewaId"
          placeholder="Enter your eSewa ID"
          value={esewaId}
          onChange={(e) => setEsewaId(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
