import React from "react";
import MEDIA from "../data/MediaList.js";
import "./footer.css";
function FooterList() {
  return (
    <div>
      <h2>Social Media</h2>
      <span>
        {MEDIA.map((m) => {
          return (
            <span>
              <a href={m.url}>
                {" "}
                <img src={m.image} className="logo" alt="logo" />{" "}
              </a>
            </span>
          );
        })}
      </span>
    </div>
  );
}

export default FooterList;
