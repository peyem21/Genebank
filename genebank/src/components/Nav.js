import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { navItems } from "./Navitems.js";
import './Nav.css';
import Button from "./Button.js"
import Dropdown from './Dropdown.js';

function Nav() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='nav-logo'>
                    GENEBANK
                </Link>
                <ul className='nav-items'>
                    {navItems.map(item => {
                            if (item.title === "About") {
                                return (
                                    <li 
                                        key={item.id} 
                                        className={item.cName}
                                        onMouseEnter={() => setDropdown(true)}
                                        onMouseLeave={() => setDropdown(false)}
                                        >
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                        {dropdown && <Dropdown /> }
                                    </li>
                                )
                            }

                        return (
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                        )
                    })}
                </ul>
                <Button />
            </nav>
         </>
    )
}


// function Nav() {
//     const [showDropdown, setShowdropdown] = useState(false)
//     const toggleDropdown = () => {
//         setShowdropdown(!showDropdown)
//     }
//     return (
//       <div className="nav">
//         <div className="nav1">
//             <div className="logo">LOGO</div>
//             <ul className='nav1-2'>
//                 <h6>Free for academic non-profit institutions.Other users need a Commercial license</h6>
//                 <form className="search-bar">
//                     <input type="search" placeholder="Search..."></input>
//                     <button type='submit'>Search</button>
//                 </form>
//                 <a>Advance</a>
//             </ul>
//         </div>
//         <div className="nav2">
//             <ul className='nav-bar-list1'>
//                 <li className="home">Home</li>
//                 <li className="user-guide">User Guide</li>
//                 <li className="analysis">Analysis Tools</li>
//                 <li className="news">Release Notes</li>
//                 <li className="about" onChange={toggleDropdown}>About
//                     <ul className="about-menu">
//                         <li>1</li>
//                         <li>2</li>
//                         <li>3</li>
//                     </ul>
//                 </li>
//                 <li className="data-access">Data Access</li>
//             </ul>
//             <ul className='nav-bar-list2'>
//                 <li className="login">Login</li>
//                 <li className="signup">Sign Up</li>
//             </ul>
//         </div>
//       </div>
//     );
//   }
  
  export default Nav;