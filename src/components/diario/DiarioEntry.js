import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const DiarioEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };
  return (
    <div
      className="diario__entry pointer  animate__animated animate__fadeIn animate__faster"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="diario__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className=" diario__entry-body">
        <h5 className="diario__entry-title">{title}</h5>
        <p className=" diario__entry-content">{body}</p>
      </div>
      <div className="diario__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h5>{noteDate.format("Do")}</h5>
      </div>
    </div>
  );
};
