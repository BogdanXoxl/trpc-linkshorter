import { MainPage } from "@pages/MainPage";
import { LinkPage } from "@pages/LinkPage";

function App() {
  const renderContent = () => {
    const { pathname } = window.location;
    if (pathname !== "/") return <LinkPage pathname={pathname} />;

    return <MainPage />;
  };

  return renderContent();
}

export default App;
