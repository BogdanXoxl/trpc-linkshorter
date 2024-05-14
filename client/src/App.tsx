import { MainPage } from "@pages/MainPage";
import { trpc } from "./utils/trpc";

// TODO:: add i18n

function App() {
  const { data } = trpc.links.test.useQuery();
  console.log(data);
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
