import React from "react";
import { DiarioEntry } from "./DiarioEntry";

export const DiarioEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="diario__entries">
      {entries.map((value) => (
        <DiarioEntry key={value} />
      ))}
    </div>
  );
};
