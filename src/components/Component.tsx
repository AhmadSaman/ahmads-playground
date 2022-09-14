import { useEffect } from "react";

const Component = () => {
  const handleKey = (e: any) => {
    if (e.key === "Enter") console.log("window event running");
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <div>
      <button onClick={() => console.log("button: click")}>click</button>
    </div>
  );
};

export default Component;
