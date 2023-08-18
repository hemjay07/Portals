import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

const RoadMapLoader = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const viewBoxWidth = width;
  const lineWidth = Math.max(1, Math.round(viewBoxWidth * 0.01));

  return (
    <ContentLoader
      viewBox={`0 0 ${viewBoxWidth} ${height}`}
      height={height}
      width={width}
      backgroundColor="#11200a"
      foregroundColor="#aadf90"
      style={{ backgroundColor: "black", overflow: "hidden" }}
    >
      <rect
        x={viewBoxWidth / 2}
        y="0"
        rx="0"
        ry="0"
        width={lineWidth}
        height={height}
      />

      <rect
        x={viewBoxWidth * 0.05}
        y={-60}
        rx="5"
        ry="5"
        width={viewBoxWidth * 0.4}
        height={height * 0.3}
      />
      <rect
        x={viewBoxWidth * 0.55}
        y={height * 0.2}
        rx="5"
        ry="5"
        width={viewBoxWidth * 0.4}
        height={height * 0.2}
      />
      <rect
        x={viewBoxWidth * 0.05}
        y={height * 0.35}
        rx="5"
        ry="5"
        width={viewBoxWidth * 0.4}
        height={height * 0.4}
      />
      <rect
        x={viewBoxWidth * 0.55}
        y={height * 0.5}
        rx="5"
        ry="5"
        width={viewBoxWidth * 0.4}
        height={height * 0.5}
      />
    </ContentLoader>
  );
};

export default RoadMapLoader;
