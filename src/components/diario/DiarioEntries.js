import React from "react";
import { useSelector } from "react-redux";
import { DiarioEntry } from "./DiarioEntry";

export const DiarioEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="diario__entries">
      {notes.map((note) => (
        <DiarioEntry key={note.id} {...note} />
      ))}
    </div>
  );
};
