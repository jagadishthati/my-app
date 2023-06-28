import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar flex gap-4 font-semibold cursor-pointer bg-slate-700 p-4  text-white">
      <Link to="/">
        <div className="nav-items  hover:border-b-4 hover:border-indigo-500">Your</div>
      </Link>
      <Link to="all">
        <div className="nav-items  hover:border-b-4 hover:border-indigo-500">All</div>
      </Link>
      <Link to="block">
        <div className="nav-items  hover:border-b-4 hover:border-indigo-500"> Block</div>
      </Link>
    </div>
  )
}

export default Navbar