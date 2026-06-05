import { useEffect, useState } from "react";

export default function useWebGLSupport() {
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      setSupportsWebGL(Boolean(context));
    } catch {
      setSupportsWebGL(false);
    }
  }, []);

  return supportsWebGL;
}
