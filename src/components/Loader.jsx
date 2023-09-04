import { useProgress, Html } from "@react-three/drei";
import ClipLoader from "react-spinners/ClipLoader";

// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      {/* <span className="canvas-load"></span> */}
      {/* <div
        className="mt-10 flex h-12 w-12 bg-secondary rounded-full   
 justify-center items-center"
      >
        <p
          style={{
            fontSize: 14,
            color: "#000000",
            fontWeight: 800,
          }}
        >
          {progress.toFixed(0)}%
        </p>
      </div> */}
      <div className="flex justify-center items-center">
        <div class="relative">
          <div
            className="w-14 h-14 rounded-full absolute
                            border-8 border-solid border-secondary
                            flex justify-center items-center"
          >
            <p
              style={{
                fontSize: 14,
                color: "#000000",
                fontWeight: 500,
              }}
            >
              {progress.toFixed(0)}%
            </p>
          </div>

          <div
            className="w-14 h-14 rounded-full animate-spin absolute
                            border-8 border-solid border-primary-text border-t-transparent shadow-md"
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
