import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRightOnRectangleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("sessionToken");
    if (!token) {
      setError("No session token found. Please log in.");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/me",
          {},
          {
            headers: {
              "x-session-token": token,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user profile", err);
        setError(err.response?.data?.message || "Failed to fetch profile");

        toast.error("Session expired or invalid!", {
          style: {
            background: "#dc2626", // red-600
            color: "white",
            fontWeight: "500",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "white",
            secondary: "#dc2626",
          },
        });

        setTimeout(() => {
          localStorage.removeItem("sessionToken");
          window.location.href = "/login";
        }, 2000);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("sessionToken");
    setUser(null);

    toast.success("Logged out successfully!", {
      style: {
        background: "#059669", // green-600
        color: "white",
        fontWeight: "500",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "white",
        secondary: "#059669",
      },
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-10 text-center text-red-500 text-lg font-semibold">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 text-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-green-700">User Profile</h2>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-all"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <UserCircleIcon className="w-12 h-12 text-gray-400" />
        <div className="text-lg font-medium text-gray-800">{user.name}</div>
      </div>

      <div className="space-y-4 text-gray-700 text-base">
        <p><strong>Email:</strong> {user.email || "Not Provided"}</p>
        <p><strong>Phone:</strong> {user.phone || "Not Provided"}</p>
        <p><strong>Address:</strong> {user.address || "Not Provided"}</p>
      </div>
    </div>
  );
};

export default Profile;
