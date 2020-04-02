import React, { useState, useEffect, useRef } from "react";
import EffectWrap from "../components/EffectWrap";
// useRef
// 为什么要使用useRef？
// 替代以前class中ref、它可以用来获取组件实例对象或者是DOM对象
// 除了传统的用法之外，它还可以“跨渲染周期”保存数据。

// 如何使用useRef?
// const countRef = useRef(0)

// useRef知识点合集
// 😄 1. 普遍操作，用来操作dom
const Hook = () => {
  const [count, setCount] = useState(0);
  const btnRef = useRef(null);

  useEffect(() => {
    console.log("use effect...");
    const onClick = () => {
      setCount(count + 1);
    };
    btnRef.current.addEventListener("click", onClick, false);
    return () => btnRef.current.removeEventListener("click", onClick, false);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button ref={btnRef}>click me </button>
    </div>
  );
};

// 😄 2. 渲染周期之间的共享数据的存储
// 上述使用 useEffect 声明两个副作用，
// 第一个每隔一秒对 count 加 1，因为只需执行一次，所以每二个参为空数组。
// 第二个 useEffect 判断 count 大于等于时，停止对 count 的操作。

// export default () => {
//   const [count, setCount] = useState(0);
//   let timer;
//   useEffect(() => {
//     timer = setInterval(() => {
//       setCount(count => count + 1);
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     if (count >= 5) {
//       clearInterval(timer);
//     }
//   });

//   return (
//     <div style={{ padding: "100px" }}>
//       <h1>{count}</h1>
//     </div>
//   );
// };




// 因为在 clearInterval, timer 这个变量已经不是 setInterval 赋值时的那个了，
// 每次 App 重渲染都会重置它。这时候就可以使用 useRef 来解决这个问题。

export default () => {
  const [count, setCount] = useState(0);

  // 使用uerRef保存
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 5) {
      clearInterval(timer.current);
    }
  });

  return (
    <div style={{ padding: "100px" }}>
      <h1>{count}</h1>
    </div>
  );
};
