import { useProgress, Html } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <div
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
      </div>
    </Html>
  );
};

export default CanvasLoader;
