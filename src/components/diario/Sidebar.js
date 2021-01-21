import React from "react";
import { DiarioEntries } from "./DiarioEntries";
import newEntryImg from "../../images/new.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleAddNewEntry = () => {
    dispatch(startNewNote());
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <aside className="diario__sidebar">
      <div className="diario__sidebar-navbar">
        <h3>
          <span>{name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="diario__new-entry" onClick={handleAddNewEntry}>
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
