import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  memo,
  useCallback,
  useReducer,
  useContext
} from "react";
import EffectWrap from "../components/EffectWrap";
// 自定义hook🌰！

// 自定义一个当resize 的时候 监听window的width和height的hook
export const useWindowSize = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const { clientWidth, clientHeight } = document.documentElement;
    setWidth(clientWidth);
    setHeight(clientHeight);
  }, []);

  useEffect(() => {
    const handleWindowSize = () => {
      const { clientWidth, clientHeight } = document.documentElement;
      setWidth(clientWidth);
      setHeight(clientHeight);
    };

    window.addEventListener("resize", handleWindowSize, false);

    return () => {
      window.removeEventListener("resize", handleWindowSize, false);
    };
  });

  return [width, height];
};

// 如何使用：

const [width, height] = useWindowSize();
