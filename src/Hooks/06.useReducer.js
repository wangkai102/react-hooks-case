import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  memo,
  useCallback,
  useReducer
} from "react";
import EffectWrap from "../components/EffectWrap";
// 为什么要使用useReducer？
// 顾名思义，useReducer就是 class 里面那个reducer

// 如何使用useReducer？
// 举个🌰：
const reducer = (state = 0, { type }) => {
  switch (type) {
    case "add":
      return state + 1;
    case "delete":
      return state - 1;
    default:
      return state;
  }
};

const Hook = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      count:{count}
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      <button onClick={() => dispatch({ type: "delete" })}>delete</button>
    </div>
  );
};

export default Hook;

// useReducer知识点合集
// 暂无特别的...😼
