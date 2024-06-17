import { useEffect, useState } from "react";
import Tile from "./Tile";

let A = 0;
let B = 0;
let C = 0;
const cubeWidth = 15; // Adjust cubeWidth for better visualization
const spacing = 2; // Increase this value to increase the spacing between tiles

export default function Cube() {
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="cube-container">
      <button onClick={toggleAnimation}>
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
      <CubeSide surface="front" isAnimating={isAnimating} />
      <CubeSide surface="back" isAnimating={isAnimating} />
      <CubeSide surface="left" isAnimating={isAnimating} />
      <CubeSide surface="right" isAnimating={isAnimating} />
      <CubeSide surface="top" isAnimating={isAnimating} />
      <CubeSide surface="bottom" isAnimating={isAnimating} />
    </div>
  );
}

function CubeSide({ surface, isAnimating }) {
  const [tiles, setTiles] = useState(initializeTiles(surface));

  useEffect(() => {
    if (!isAnimating) return;

    const intervalId = setInterval(() => {
      setTiles((prevTiles) => {
        const newTiles = [...prevTiles];
        for (let i = 0; i < cubeWidth; i++) {
          for (let j = 0; j < cubeWidth; j++) {
            let r = calculatePosition(i, j, surface);
            newTiles[i * cubeWidth + j] = (
              <Tile
                key={`${surface}-${i}-${j}`}
                surface={surface}
                x={r[0]}
                y={r[1]}
                z={r[2]}
              />
            );
          }
        }
        A += 0.005;
        B += 0.005;
        C += 0.001;
        return newTiles;
      });
    }, 10);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [isAnimating, surface]);

  return <div>{tiles}</div>;
}

function initializeTiles(surface) {
  let tiles = [];
  for (let cubeX = 0; cubeX < cubeWidth; cubeX++) {
    for (let cubeY = 0; cubeY < cubeWidth; cubeY++) {
      let res = calculatePosition(cubeX, cubeY, surface);
      tiles.push(
        <Tile
          key={`${surface}-${cubeX}-${cubeY}`}
          surface={surface}
          x={res[0]}
          y={res[1]}
          z={res[2]}
        />
      );
    }
  }
  return tiles;
}

function calculatePosition(x, y, surface) {
  let res;
  switch (surface) {
    case "front":
      res = [x * spacing, y * spacing, -cubeWidth * 2];
      break;
    case "back":
      res = [x * spacing, y * spacing, cubeWidth * 0.05];
      break;
    case "left":
      res = [cubeWidth * 2, y * spacing, -x * spacing];
      break;
    case "right":
      res = [-cubeWidth * 0.05, y * spacing, -x * spacing];
      break;
    case "top":
      res = [x * spacing, cubeWidth * 2, -y * spacing];
      break;
    case "bottom":
      res = [x * spacing, cubeWidth * 0.001, -y * spacing];
      break;
  }
  return [calculateX(...res), calculateY(...res), calculateZ(...res)];
}

// ---MATH---
// Rotational Matrices 3D calculations
// Calculate New Positions
function calculateX(i, j, k) {
  return (
    j * Math.sin(A) * Math.sin(B) * Math.cos(C) -
    k * Math.cos(A) * Math.sin(B) * Math.cos(C) +
    j * Math.cos(A) * Math.sin(C) +
    k * Math.sin(A) * Math.sin(C) +
    i * Math.cos(B) * Math.cos(C)
  );
}

function calculateY(i, j, k) {
  return (
    j * Math.cos(A) * Math.cos(C) +
    k * Math.sin(A) * Math.cos(C) -
    j * Math.sin(A) * Math.sin(B) * Math.sin(C) +
    k * Math.cos(A) * Math.sin(B) * Math.sin(C) -
    i * Math.cos(B) * Math.sin(C)
  );
}

function calculateZ(i, j, k) {
  return (
    k * Math.cos(A) * Math.cos(B) -
    j * Math.sin(A) * Math.cos(B) +
    i * Math.sin(B)
  );
}
