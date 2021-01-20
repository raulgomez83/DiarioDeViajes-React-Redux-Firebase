import React from "react";
import { DiarioEntries } from "./DiarioEntries";
import newEntryImg from "../../images/new.svg";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <aside className="diario__sidebar">
      <div className="diario__sidebar-navbar">
        <h3>
          <span>Raul</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="diario__new-entry">
        <img
          className="diario__new-entry-img"
          src={newEntryImg}
          alt="logo nueva entrada"
        />
        <p className="mt-5">New entry</p>
      </div>
      <DiarioEntries />
    </aside>
  );
};
