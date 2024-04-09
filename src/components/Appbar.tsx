
import { Button } from "./ui/moving-border";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="h-24 border-b-8 p-4 flex justify-between">
      <div className="flex justify-center flex-col text-2xl text-blue-700">
        Vichar
      </div>
      <div>
        <Link to={"/publish"}>
        <Button
          borderRadius="1.55rem"
          className="w-full text-lg bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Create
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Appbar;
