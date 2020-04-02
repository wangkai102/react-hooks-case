import React, { useState, useEffect, useRef, useMemo, memo } from "react";
import EffectWrap from "../components/EffectWrap";
// useMemo
// 为什么要使用useMemo？
// 举个🌰:
const Child = memo(({ data }) => {
  console.log("child render...", data.name);
  return (
    <div>
      <div>child</div>
      <div>{data.name}</div>
    </div>
  );
});

const Hook = () => {
  console.log("Hook render...");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rose");

  // 当我们点击按钮更新count的时候，组件会render，一旦render， 执行到这一行代码
  // const data = {
  //   name
  // };
  // 这一行代码会生成有新的内存地址的对象，那么就算带着memo的Child组件，
  // 也会跟着重新render， 尽管最后其实Child使用到的值没有改变！

  // 这样就多余render了，感觉性能浪费了！于是useMemo 作为一个有着暂存能力的，就来了。

  // 如何使用useMemo?
  const data = useMemo(() => {
    return {
      name
    };
  }, [name]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>update count </button>
      <Child data={data} />
    </div>
  );
};

export default Hook;

// useMemo知识点合集
// useMemo 一看 就感觉跟到memo有种蜜汁关系，因为都有memo...
// 😄 1. 首先，memo 类似于PureCompoent 作用是优化组件性能，防止组件触发重渲染
// memo针对 一个组件的渲染是否重复执行
// 但是，如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。

// 😄 2. 而useMemo针对 一段函数逻辑是否重复执行,而且，useMemo是浅比较，意思是，对象只比较内存地址，只要你内存地址没变，管你对象里面的值千变万化都不会触发render


