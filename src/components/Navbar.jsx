import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/avatar.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-bold">Jack Page</span>
        </div>
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-semibold transition duration-300 ${
                  isActive
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-red-500"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
