import { NavLink as NavLinkReactRouter } from "react-router-dom";

export default function NavLink({children, to, isVisible, ...props}) {
  const changeClasses = ({isActive}) => {
    return `py-2 px-4 py-2 px-4 hover:bg-blue-700 hover:text-white rounded transition-colors duration-300 ${isActive ? "bg-blue-700 text-white" : isVisible ? "text-black" : "text-white"}`
  }

  return (
    <NavLinkReactRouter {...props} to={to} className={changeClasses}>
      {children}
    </NavLinkReactRouter>
  )
}
