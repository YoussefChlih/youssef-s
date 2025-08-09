import React from "react";
import Routes from "./Routes";
import AnalyticsTracker from './components/AnalyticsTracker';
import { I18nProvider } from './utils/i18n.jsx';
import TitleManager from './components/TitleManager.jsx';

function App() {
  return (
    <I18nProvider>
      <AnalyticsTracker />
  <TitleManager />
      <Routes />
    </I18nProvider>
  );
}

export default App;
