import React from "react";
import { IoSearch } from "react-icons/io5";
import "./MobileNavbar.css";

export default function MobileNavbar({
  mobileNav,
  setMobileNav,
  userData,
  setFilteredData,
  setNoResult,
}) {
  // filter user by name
  const filter = (e) => {
    e.preventDefault();
    const nameInput = e.target.username.value.toLowerCase();
    const user = userData.find((obj) =>
      obj.name.toLowerCase().includes(nameInput)
    );
    if (user) {
      setNoResult(false);
      setFilteredData([user]);
      setMobileNav(false);
    } else setNoResult(true);
  };

  return (
    <section
      className={`navbar-m ${mobileNav && "active"}`}
      onClick={() => setMobileNav(false)}
    >
      <nav onClick={(e) => e.stopPropagation()}>
        <form onSubmit={filter}>
          <input type="text" name="username" required />
          <button type="submit">
            <IoSearch color="#145050" />
          </button>
        </form>
      </nav>
    </section>
  );
}
