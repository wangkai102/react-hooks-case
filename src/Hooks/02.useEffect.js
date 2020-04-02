import React, { useState, useEffect } from "react";
import EffectWrap from "../components/EffectWrap";
// useEffect
// 为什么要使用useEffect?
// useEffect 的出现是 ： 在函数组件里面使用 class的生命周期函数，还是所有函数的合体!

// 如何使用useEffect?
// useEffect(()=>{
//   ...
// })

// useEffect知识点合集
export default () => {
  // 😄1.只在第一次使用的componentDidMount，可以用来请求异步数据
  // useEffect最后，加了[]就表示只第一次执行
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 异步获取users;
    new Promise(reslove => {
      setTimeout(() => {
        reslove(["小明", "小红"]);
      }, 2000);
    }).then(data => setUsers(data));
  }, []);

  // 😄2.用来替代componentwillUpdate等每次渲染都会执行的生命函数
  // useEffect最后，不加[]就表示每一次渲染都执行
  useEffect(() => {
    console.log("每次渲染都会执行----componentwillUpdate");
  });

  // 😄3.每次渲染都执行感觉有点费，所以：
  // useEffect最后，加[]，并且[]里面加的字段就表示，这个字段更改了，我这个effect才执行
  useEffect(() => {
    console.log("只有users有变化才会执行");
  }, [users]);
  useEffect(() => {
    console.log("只有count有变化才会执行");
  }, [count]);

  // 😄4.如果我们之前订阅了什么，最后在componentwillUnMount这个生命周期里面要取消订阅，这可咋用useEffect实现啊：

  // 为什么要取消订阅？
  // 大家都知道，render了之后会执行重新useEffect，如果useEffect里面有一个每setInterval...那么每次render了，再次执行useEffect就会再创建一个setInterval，然后就混乱了...可以把下面案例return的内容删掉感受下

  useEffect(() => {
    console.log("use effect...", count);
    const timer = setInterval(() => setCount(count + 1), 1000);
    // 在effect的return里面可以做取消订阅的事
    return () => clearInterval(timer);
  });

  // 😄5.useEffect的一些冷知识：

  // 1.useEffect 里面使用到的state的值, 固定在了useEffect内部， 不会被改变，除非useEffect刷新，重新固定state的值

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use effect...", count);
    const timer = setInterval(() => {
      console.log("timer...count:", count);
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2.useEffect不能被判断包裹

  const [count, setCount] = useState(0);
  if (2 < 5) {
    useEffect(() => {
      console.log("use effect...", count);
      const timer = setInterval(() => setCount(count + 1), 1000);
      return () => clearInterval(timer);
    });
  }

  // 3.useEffect不能被打断

  // const [count, setCount] = useState(0)
  // useEffect(...)

  // return // 函数提前结束了

  // useEffect(...)
  // }

  return (
    <div>
      <div style={{ paddingBottom: 18 }}>
        <h4>1、componentDidMount</h4>
        {users.map(v => (
          <p key={v}>{v}</p>
        ))}
      </div>
      <div>
        <p>2</p>
      </div>
    </div>
  );
};
