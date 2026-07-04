import { BookmarkCard } from "./components/BookmarkCard";
import { BookmarkCardProps } from "./components/BookmarkCard/types";

const defaultProps: BookmarkCardProps = {
  title: "GitHub Homepage",
  url: "https://github.com",
  description:
    "GitHub is where over 150 million developers shape the future of software.",
  tags: ["code", "version control"],
};

export default function App() {
  return (
    <div className="p-6 bg-slate-100">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        React + TS + Tailwind
      </h1>
      <BookmarkCard {...defaultProps} />
    </div>
  );
}
