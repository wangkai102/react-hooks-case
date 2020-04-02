import React, { useState, memo } from 'react';

// 01.useState

// 为什么要使用useState？🤔️
// useState 的出现是 ： 在函数组件里面使用 class的setState！
// 解决了的问题是：当我们一个函数组件想要有自己维护的state的时候，不得已只能转换成class。这样很麻烦！

// 如何使用useState？
// const [name, setName] = useState('rose')

// useState踩坑知识点
// 😄1. 重点： useState的初始值，只在第一次有效
// 我当时反正没有当回事，直到遇到了坑...
// 🌰2. 举个例子：
// 当我点击按钮修改name的值的时候，我发现在Child组件， 是收到了，但是并没有通过useState赋值给name！

const Child = memo(({ data }) => {
  console.log('child render...', data);
  const [name, setName] = useState(data);
  return (
    <div>
      <div>child</div>
      <div>
        {name} --- {data}
      </div>
    </div>
  );
});

const Hook = () => {
  console.log('Hook render...');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rose');

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>update count </button>
      <button onClick={() => setName('jack')}>update name </button>
      <Child data={name} />
    </div>
  );
};

export default Hook;
