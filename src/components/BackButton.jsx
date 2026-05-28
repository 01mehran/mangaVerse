// React-router-dom
import { useNavigate } from "react-router-dom";

// Icons;
import { MoveLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-8 cursor-pointer text-gray-400 transition hover:-translate-x-px hover:text-purple-400"
    >
      <MoveLeft size={36} />
    </button>
  );
}
