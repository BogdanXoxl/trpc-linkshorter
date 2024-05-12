import { useEffect } from "react";
import { trpc } from "./utils/trpc";

function App() {
  const { mutate, data } = trpc.links.add.useMutation();
  const { data: link, refetch } = trpc.links.get.useQuery(data ?? "");

  console.log(data);
  console.log("get:  ", link);

  useEffect(() => {
    if (link) {
      window.open(link, "_blank");
    }
  }, [link]);

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <>
      <h1 className="text-xs font-bold underline">Tailwind</h1>
      <button onClick={() => mutate({ href: "https://google.com" })}>
        Refetch
      </button>
    </>
  );
}

export default App;
