import { MainPage } from "@pages/MainPage";
import { LinkPage } from "@pages/LinkPage";
// TODO:: add i18n

function App() {
  const renderContent = () => {
    if (window.location.pathname !== "/") return <LinkPage />;

    return <MainPage />;
  };

  return renderContent();
}

export default App;
