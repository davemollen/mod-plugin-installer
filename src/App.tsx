import { attachConsole } from "@tauri-apps/plugin-log";
import { ToastContextProvider } from "./contexts/ToastContextProvider";
import { PluginManagerPage1 } from "./pages/PluginManagerPage1";
import { PluginManagerPage2 } from "./pages/PluginManagerPage2";
import { ModPluginManager } from "./pages/ModPluginManager";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { PluginContextProvider } from "./contexts/PluginContextProvider";

function App() {
  useEffect(() => {
    const promise = attachConsole();

    return () => {
      promise.then((f) => f());
    };
  }, []);

  return (
    <ToastContextProvider>
      <PluginContextProvider>
        <Router>
          <Navigation>
            <main className="flex min-h-screen w-full flex-1 flex-col p-6">
              <Routes>
                <Route path="/" element={<PluginManagerPage1 />} />
                <Route
                  path="/plugin-manager-page-2"
                  element={<PluginManagerPage2 />}
                />
                <Route
                  path="/mod-plugin-manager"
                  element={<ModPluginManager />}
                />
              </Routes>
            </main>
          </Navigation>
        </Router>
      </PluginContextProvider>
    </ToastContextProvider>
  );
}

export default App;
