// React-router-dom
import { useNavigate } from "react-router-dom";

// Icons;
import { MoveLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-8 cursor-pointer text-indigo-400 transition hover:-translate-x-px hover:text-indigo-500 dark:text-gray-400 dark:hover:text-purple-600"
    >
      <MoveLeft size={36} />
    </button>
  );
}
