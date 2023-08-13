import { useEffect } from "react";

export const useKeyDown = (callback, keys) => {
  const onKeyDown = (event) => {
    const wasAnyKeyPressed = keys.some((key) => event.key === key);
    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};

// https://medium.com/@paulohfev/problem-solving-custom-react-hook-for-keydown-events-e68c8b0a371#:~:text=Verifying%20when%20a%20key%20has%20been%20pressed&text=keys%20was%20pressed.-,const%20wasAnyKeyPressed%20%3D%20keys.,key%20%3D%3D%3D%20key)%3B
