import Counter from "./components/Counter";
export default async function Home() {
  // 在 Server Component 中可以直接使用 async function 來獲取資料，
  // Client Component 不能用 async function 當組件，需改用 useEffect + useState
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      {/* 可以透過 props 將獲取到的資料從 Server Component 傳遞給 Client Component */}
      <Counter users={data} />
    </div>
  );
}
