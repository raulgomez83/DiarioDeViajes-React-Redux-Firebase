import React from "react";

export const DiarioEntry = () => {
  return (
    <div className="diario__entry pointer">
      <div
        className="diario__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1570696177405-da064e33a093?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDF8MHxwdXJwbGU%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
      ></div>
      <div className=" diario__entry-body">
        <h5 className="diario__entry-title">Un nuevo día</h5>
        <p className=" diario__entry-content">
          Id enim ad aliqua excepteur labore ad ullamco nostrud quis.
        </p>
      </div>
      <div className="diario__entry-date-box">
        <span>Monday</span>
        <h5>16</h5>
      </div>
    </div>
  );
};
