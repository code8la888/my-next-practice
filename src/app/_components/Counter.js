"use client";
import { useState } from "react";

export default function Page({ users }) {
  // hook 只能在 client component 使用，要使用 hook 需要在檔案最上方加上 "use client" 聲明
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
