import "./App.css";

import ApplicationNavLinksContainer from "./containers/application-nav-links-container/ApplicationNavLinksContainer";
import ApplicationSearchContainer from "./containers/application-search-container/ApplicationSearchContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponents/Header";
import AnalyticsWholeContainer from "./containers/analytics-whole-container/AnalyticsWholeContainer";

const AnalyticsTab = () => <div>Analytics content</div>;
const DistributeTab = () => <div>Distribute content</div>;
const StatusTab = () => <div>Status content</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="whole_container">
        <Header />

        <aside className="sidebar"></aside>

        <div className="main_content">
          <ApplicationSearchContainer />
          <ApplicationNavLinksContainer />

          <div id="analytics_wrapper" className="analytics_wrapper">
            <Routes>
              <Route path="/application">
                <Route index element={<Navigate to="analytics" replace />} />
                <Route path="analytics" element={<AnalyticsWholeContainer />} />
                <Route path="distribute" element={<DistributeTab />} />
                <Route path="status" element={<StatusTab />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
