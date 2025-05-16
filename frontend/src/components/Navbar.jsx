import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  const token = localStorage.getItem("sessionToken");

  return (
    <div className="flex sticky top-0 z-999 flex-row justify-between items-center px-6 py-3 bg-white shadow-md font-ibm">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-green-600">
        <LocalMallOutlinedIcon className="text-green-600 font-bold" />
        PayIt
      </Link>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link 
          to="/" 
          className="hover:text-green-700 hover:shadow-inner hover:shadow-gray-300 p-2 rounded-md transition-all duration-200"
        >
          Home
        </Link>
        <Link 
          to="/history" 
          className="hover:text-green-700 hover:shadow-inner hover:shadow-gray-300 p-2 rounded-md transition-all duration-200"
        >
          Payments
        </Link>
        <Link 
          to="/services" 
          className="hover:text-green-700 hover:shadow-inner hover:shadow-gray-300 p-2 rounded-md transition-all duration-200"
        >
          Services
        </Link>
      </div>

      <div className="flex gap-6 text-gray-700 font-medium items-center justify-center">
        {!token ? (
          <Link 
            to="/register" 
            className="hover:shadow-inner p-2 rounded-md transition-all duration-200 border-2 border-gray-500 hover:scale-105"
          >
            Login/Register
          </Link>
        ) : (
          <Link 
            to="/profile"
            className="text-gray-900 font-bold hover:scale-110"
          >
            <AccountCircleOutlinedIcon style={{ fontSize: "2rem" }} />
          </Link>
        )}

        <Link 
          to="/contact" 
          className="text-white bg-gray-900 hover:shadow-inner hover:bg-gray-700 hover:scale-105 p-2 rounded-md transition-all duration-100"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
