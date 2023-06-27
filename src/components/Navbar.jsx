import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar flex gap-4 font-semibold cursor-pointer">
      <Link to="/your">
        <div className="nav-items">Your</div>
      </Link>
      <Link to="all">
        <div className="nav-items">All</div>
      </Link>
      <Link to="block">
        <div className="nav-items"> Block</div>
      </Link>
    </div>
  )
}

export default Navbar