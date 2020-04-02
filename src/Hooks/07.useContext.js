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
// 为什么要使用useContext？
// 顾名思义，useContext就是 class 里面那个context

// 如何使用useContext？
// 举个🌰：

const Context = React.createContext(null);

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

const Child = () => {
  const [count, dispatch] = useContext(Context);
  return (
    <div>
      <div>child...{count}</div>
      <button onClick={() => dispatch({ type: "add" })}>child add</button>
      <button onClick={() => dispatch({ type: "delete" })}>child delete</button>
    </div>
  );
};

const Hook = () => {
  const [count, dispatch] = useReducer(reducer, 10);
  return (
    <Context.Provider value={[count, dispatch]}>
      <div>
        <div>mom ... {count}</div>
        <Child />
        <button onClick={() => dispatch({ type: "add" })}>mom add</button>
        <button onClick={() => dispatch({ type: "delete" })}>mom delete</button>
      </div>
    </Context.Provider>
  );
};

export default Hook;

// useContext知识点合集
// 暂无特别的...😼
