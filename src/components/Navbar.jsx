import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Jack Page</h1>
        <ul className="flex gap-6 text-lg">
          <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400 transition">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
