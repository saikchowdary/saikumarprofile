
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-yellow-400 text-white dark:bg-gray-700">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
