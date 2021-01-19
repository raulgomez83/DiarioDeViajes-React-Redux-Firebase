import React from "react";
import { NoteScreen } from "../notes/NoteScreen";

/* import { NothingSelected } from "./NothingSelected"; */
import { Sidebar } from "./Sidebar";

export const DiarioScreen = () => {
  return (
    <div className="diario__main-content">
      <Sidebar />
      <main>
        {/*   <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};
