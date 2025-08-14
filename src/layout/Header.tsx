import { NavLink } from "react-router-dom";


export default function Header() {

  const linkStyle = " text-[#1C3988] hover:bg-transparent active:bg-transparent focus:bg-transparent text-lg";

  const links = (
    <>
      <li><NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Home</NavLink></li>

      <li>
        <details>
          <summary  className={linkStyle}>Property Types</summary>
          <ul className="p-2 w-[250px]">
            <li><NavLink to="/property-types/submenu1" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Farms 7 ranches</NavLink></li>
            <li><NavLink to="/property-types/submenu2" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Recreational</NavLink></li>
            <li><NavLink to="/property-types/submenu2" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Residential lots</NavLink></li>
            <li><NavLink to="/property-types/submenu2" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Commercial</NavLink></li>
            <li><NavLink to="/property-types/submenu2" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>waterfront</NavLink></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary className={linkStyle}>Countries</summary>
          <ul className="p-2 w-[250px]">
            <li><NavLink to="/countries/united-states" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>United States</NavLink></li>
            <li><NavLink to="/countries/canada" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Canada</NavLink></li>
            <li><NavLink to="/countries/mexico" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Mexico</NavLink></li>
            <li><NavLink to="/countries/brazil" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Brazil</NavLink></li>
            <li><NavLink to="/countries/spain" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Spain</NavLink></li>
            <li><NavLink to="/countries/australia" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Australia</NavLink></li>
            <li><NavLink to="/countries/view-all" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>View All Countries</NavLink></li>

          </ul>
        </details>
      </li>

      <li><NavLink to="/seller-plans" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Seller Plans</NavLink></li>
      <li><NavLink to="/cost-calculator" className={({ isActive }) => `${linkStyle} ${isActive ? "font-bold" : ""}`}>Cost Calculator</NavLink></li>
    </>
);




  return (
    <div className=" w-11/12 mx-auto">
      <div className="navbar h-[107px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10486/10486773.png"
                alt=""
                className="w-8"
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:bg-transparent border-none h-auto shadow-none">
            <img src="/logo.png" alt="" className="h-[72px]" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#1C3988] hover:bg-[#1C3988] text-white border-none rounded-[8px] w-[118px]">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
