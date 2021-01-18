import React from "react"
import { FaCampground, FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import links from "../constants/links"

const Navbar = ({setOpenSlider}) => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar__header">
          <Link to="/" className="navbar__header-logo">
            <FaCampground /> Camping
          </Link>
          <button onClick={()=>setOpenSlider(true)} className="navbar__header-btn">
            <FaBars />
          </button>
        </div>
        <ul className="navbar__links">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link activeClassName="active" to={link.url}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
