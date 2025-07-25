import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="text-7xl">add client & location</h1>
        <form className="p-4 flex flex-col justify-center items-center gap-4">
          <div className="flex gap-4">
            <p>add client here :</p>
            <button className="border p-1">add</button>
          </div>
          <div className="flex gap-4">
            <p>add client here :</p>
            <button className="border p-1">add</button>
          </div>
        </form>
      </div>
    </>
  );
}
