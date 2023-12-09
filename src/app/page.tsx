import { Card } from "./components/card/Card";

export default function Home() {
  return (
    <div className="text-center p-10 ">
      <h1 className=" h-20 mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl">
        English expression
      </h1>
      <div className="flex justify-center items-center py-20">
        <Card />
      </div>
    </div>
  );
}
