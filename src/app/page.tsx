import { Card } from "./components/card/Card";

export default function Home() {
  return (
    <div className="text-center p-10 ">
      <h1 className="font-bold text-2xl">English expression</h1>
      <div className="flex justify-center items-center py-20">
        <Card />
      </div>
    </div>
  );
}
