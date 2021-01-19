import React from "react";
import { DiarioEntries } from "./DiarioEntries";
import newEntryImg from "../../images/new.svg";

export const Sidebar = () => {
  return (
    <aside className="diario__sidebar">
      <div className="diario__sidebar-navbar">
        <h3>
          <span>Raul</span>
        </h3>
        <button className="btn">Logout</button>
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
