import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Routes from "./Routes";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document direction and language
    const currentLang = i18n.language;
    const isRTL = currentLang === 'ar';
    
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // Add RTL class to body for CSS targeting
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  return (
    <Routes />
  );
}

export default App;
