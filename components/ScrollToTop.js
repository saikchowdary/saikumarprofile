
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 bg-yellow-400 dark:bg-gray-700 text-white p-2 rounded-full shadow-lg z-50">
      <ArrowUp />
    </button>
  ) : null;
}
