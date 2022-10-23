import { FC } from "react";

import { ThemeToggler } from ".";

const Header: FC = () => {
  return (
    <nav className="bg-white backdrop-blur-sm bg-transparent z-10 shadow-md py-2 dark:bg-darkBlue-el sticky top-0">
      <div className="w-[97%] md:w-[90%] mx-auto flex justify-between items-center py-2">
        <div>
          <h2 className="font-semibold text-xl md:text-2xl">
            Where in the world?
          </h2>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Header;
