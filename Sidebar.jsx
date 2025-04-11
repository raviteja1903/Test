import { useState } from "react";
import { Home, Compass, Users, Library, ChevronLeft, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import '../Pages/Login';
import logo from '../assets/Logo.png'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  if (isLoginPage) return null;

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <ChevronLeft size={20} className={isOpen ? "" : "rotate-180"} />
      </button>

      <div className="sidebar-logo">
        {isOpen ? (
          <>
            <img
              src={logo}  
              alt="Logo"
              className="logo-img"
            />
            <span><span className="title-name">M</span>ediGraph-AI</span>
          </>
        ) : (
          <span className="collapsed-logo">AI</span>
        )}
      </div>

      {isOpen && (
        <button className="new-thread-btn">
          New Thread
          <kbd className="ml-2 bg-gray-700 px-2 py-1 text-xs rounded">
            Ctrl ⇧ + P
          </kbd>
        </button>
      )}

      <nav className="mt-6 space-y-4">
        <NavItem icon={<Home size={20} />} text="Home" isOpen={isOpen} />
        <NavItem icon={<Compass size={20} />} text="Discover" isOpen={isOpen} />
        <NavItem icon={<Users size={20} />} text="Spaces" isOpen={isOpen} />
        <NavItem icon={<Library size={20} />} text="Library" isOpen={isOpen} />
      </nav>

      <div className="auth-buttons">
        {isOpen ? (
          <Link to="/signup">
            <button className="sign-up">Sign Up</button>
          </Link>
        ) : (
          <User size={24} className="icon-btn" />
        )}

        {isOpen && (
          <Link to="/login">
            <button className="login">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, isOpen }) => {
  return (
    <div className="nav-item">
      {icon}
      {isOpen && <span>{text}</span>}
    </div>
  );
};

export default Sidebar;
