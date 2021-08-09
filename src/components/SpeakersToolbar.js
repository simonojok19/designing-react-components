import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
export default function SpeakersToolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { showSessions, setShowSessions } = useContext(SpeakerFilterContext);

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => {
                    setShowSessions(event.target.checked);
                  }}
                />
                <span className="switch" />
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-5">
              <strong>Theme</strong>
              <label htmlFor="" className="dropdown">
                <select
                  value={theme}
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                  className="form-control theme"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
