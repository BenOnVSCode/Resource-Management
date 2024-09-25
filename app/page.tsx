import Image from "next/image";
import { Search } from "../components/search";
import { Filter } from "../components/filter";
import { Resource } from "../components/resource";
import { New } from "../components/new";

export default function Home() {
  return (
    <div className="w-full min-h-full p-8">
      <h1 className="font-bold text-2xl">
        Hello Benallal 👋
      </h1>
      <p className="text-zinc-500 mt-2">
        Manage your resources here for easy, flexible access.
      </p>
      <div className="flex items-center mt-4 gap-4 ">
        <Search />
        <Filter />
        <New />
      </div>
      <div className="mt-4">
        <Resource />
      </div>
    </div>
  );
}
