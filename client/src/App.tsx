import { trpc } from "./utils/trpc";

function App() {
  const { data } = trpc.links.helloworld.useQuery();
  const test = trpc.links.getAll.useQuery();

  console.log(data?.message);
  console.log(test.data);
  return (
    <>
      <h1 className="text-xs font-bold underline">{data?.message}</h1>
    </>
  );
}

export default App;
