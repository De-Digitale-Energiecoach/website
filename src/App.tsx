import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import "./i18n";

export default function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
