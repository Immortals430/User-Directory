import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

export default function Navbar({ userData, setFilteredData, setNoResult, setMobileNav }) {
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
    } else setNoResult(true);
  };

  return (
    <nav className="navbar">
      <h1><a href="/">User Directory</a></h1>
      <div className="nav-right-sec">
        <form onSubmit={filter}>
          <input type="text" name="username" required />
          <button type="submit">
            <IoSearch color="#145050" />
          </button>
        </form>

        <IoMdMenu
          size={35}
          className="menu"
          onClick={() => setMobileNav((prev) => !prev)}
        />
      </div>
    </nav>
  );
}
