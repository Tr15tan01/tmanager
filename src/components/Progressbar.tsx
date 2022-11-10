import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// const percentage = 36;

interface PropTypes {
  percentage: number;
  width: number;
}

export const ProgressBar = ({ percentage, width }: PropTypes) => {
  return (
    <div
      className="mb-3"
      style={{
        width: width,
        height: width,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: "magenta",
            // stroke: `rgba(16, 252, 129, ${percentage / 100})`,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "#d6d6d6",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "#f88",
            // Text size
            fontSize: "16px",
            //Text weight,
            fontWeight: "bold",
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "#3e98c7",
          },
        }}
      />
    </div>
  );
};
