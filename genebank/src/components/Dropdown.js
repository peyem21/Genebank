import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css"
import { aboutDropdown } from "./Navitems";

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    return(
        <>
            <ul className={dropdown ? "about-submenu clicked" : "about-submenu"} onClick={() => setDropdown(!dropdown)}>
                {aboutDropdown.map(item => {
                    return(
                        <li key={item.id} >
                            <Link to={item.path}
                             className={item.cName}
                             onClick={() => setDropdown(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown;