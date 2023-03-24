import { NavLink } from "react-router-dom";

export default function Header() {
  const applyNavLinkStyles = ({ isActive }) => {
    return `text-white font-bold hover:bg-teal-800 transition-all after:block after:w-0
            after:h-1 after:bg-white after:transition-all hover:after:w-full p-4
            ${isActive && 'after:w-full after:bg-teal-200 hover:bg-inherit'}`
  }

  return (
    <header className="bg-teal-600">
      <nav className="flex justify-end gap-6">
        <NavLink to="/" className={applyNavLinkStyles}>Home</NavLink>
        <NavLink to="/store" className={applyNavLinkStyles}>Store</NavLink>
        <NavLink to="/cart" className={applyNavLinkStyles}>Cart</NavLink>
      </nav>
    </header>
  )
}
