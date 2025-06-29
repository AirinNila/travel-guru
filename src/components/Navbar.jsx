import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li><NavLink to="/">News</NavLink></li>
    <li><NavLink to="/destination">Destination</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar text-black text-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src="/public/images/icons/logo.png" className="w-16 md:w-24" alt="" /></a>
  </div>
  
  <div className="navbar-end">
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <Link to="/login">
    <button className="btn text-black primary-bg">Login</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;