import { FC } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const Theme: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="w-full">
      <p
        onClick={toggleTheme}
        className="flex items-center gap-x-2 cursor-pointer"
      >
        {theme === "dark" ? (
          <>
            <SunIcon className="h-8" />
            Light Mode
          </>
        ) : (
          <>
            <MoonIcon className="h-8" />
            Dark Mode
          </>
        )}
      </p>
    </div>
  );
};

export default Theme;
