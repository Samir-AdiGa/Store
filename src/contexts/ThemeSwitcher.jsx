import { createContext, useContext, useEffect, useState } from "react";

const ThemeSwitcher = createContext();

export const ThemeProvider = ({ children }) => {
  // قراءة السمة المحفوظة من localStorage أو اعتماد 'light' كافتراضي
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  // تحديث عنصر الـ HTML ليتأثر به Bootstrap وباقي الـ CSS، وحفظ الخيار
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // دالة التبديل بين اللين الفاتح والداكن
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeSwitcher.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSwitcher.Provider>
  );
};

// Hook مخصص لسهولة استدعاء الثيم في أي مكان
export const useTheme = () => useContext(ThemeSwitcher);