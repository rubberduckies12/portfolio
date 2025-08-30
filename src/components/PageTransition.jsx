import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out w-full min-h-screen bg-black
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-100"}`}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </div>
  );
}