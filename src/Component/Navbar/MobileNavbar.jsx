import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import "./MobileNavbar.css";

export default function MobileNavbar({ mobileNav, setMobileNav }) {

  return (
    <section
     className={`navbar-m ${mobileNav && "active"}`}
     onClick={()=>setMobileNav(false)}>
      <nav onClick={(e) => e.stopPropagation()}>
        <form action="">
          <input type="text" />
          <button type="submit">
            <IoSearch color="#145050" />
          </button>
        </form>
      </nav>
    </section>
  );
}
