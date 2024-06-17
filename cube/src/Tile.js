import React from "react";

function Tile({ surface, x, y, z }) {
  let s = "";
  if (surface === "front") s = "$"; // correct
  else if (surface === "back") s = ";"; // correct
  else if (surface === "left") s = "@"; // coorect
  else if (surface === "right") s = "~"; // correct
  else if (surface === "bottom") s = "#";
  else if (surface === "top") s = "+"; // correct

  return (
    <div className="tile" style={{ left: `${x}%`, top: `${y}%`, zIndex: z }}>
      {s}
    </div>
  );
}

export default Tile;
