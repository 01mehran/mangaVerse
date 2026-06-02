// React Hooks;
import { useEffect } from "react";

// React-router-dom;
import { useNavigation } from "react-router-dom";

// Icons;
import { Riple } from "react-loading-indicators";

export default function Spinner() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // Hide body overflowe while loading;
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="hidden dark:block">
        <Riple color="#ad46ff" size="medium" text="" textColor="" />
      </span>
      <span className="block dark:hidden">
        <Riple color="#4539f6" size="medium" text="" textColor="" />
      </span>
    </div>
  );
}
