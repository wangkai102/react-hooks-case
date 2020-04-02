import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  memo,
  useCallback
} from "react";
import EffectWrap from "../components/EffectWrap";
// useCallback
// 为什么要使用useCallback？
// useMemo 解决了值的缓存的问题，那么函数呢？
// 下面这个🌰就是:
const Child = memo(({ data, onChange }) => {
  console.log("child render...");
  return (
    <div>
      <div>child</div>
      <div>{data}</div>
      <input type="text" onChange={onChange} />
    </div>
  );
});

const Hook = () => {
  console.log("Hook render...");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rose");
  const [text, setText] = useState("");

  // 当点击count的按钮，组件render，遇到了：
  // const onChange = e => {
  //   setText(e.target.value());
  // };
  // 则，重新生成了一个onChange函数，赋值给了Child组件，
  // 浅比较失败，Child组件成功重新render，尽管Child组件什么都没有做！

  // 如何使用useCallback？
    const onChange = useCallback((e)=>{
      setText(e.target.value())
  },[])

  return (
    <div>
      <div>count: {count}</div>
      <div>text : {text}</div>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <Child data={name} onChange={onChange} />
    </div>
  );
};

// useCallback 知识点合集
// 😄1.useMemo 与 useCallback 类似，都是有着缓存的作用。本质的区别可能就是：

// useMemo 是缓存值的

// useCallback 是缓存函数的

// 😄2.没有依赖，添加空的依赖，就是空数组！
