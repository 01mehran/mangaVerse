import { Riple } from "react-loading-indicators";

export default function Spinner() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="hidden dark:block">
        <Riple color="#ad46ff" size="medium" text="" textColor="" />
      </span>
      <span className="block dark:hidden">
        <Riple color="#4539f6" size="medium" text="" textColor="" />
      </span>
    </div>
  );
}
