"use client"
import {createClient, createLocation} from "@/app/actions"

export default function Home() {
  const handleSubmitClient = async (e : React.FormEvent) => {
    e.preventDefault()
    await createClient()
    console.log(" client created !!!")
  }
  const handleSubmitLocation = async (e : React.FormEvent) => {
    e.preventDefault()
    await createLocation()
    console.log("location created !!")
  }
  return (
    <>
      <div className="">
        <h1 className="text-7xl">add client & location</h1>
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <form className="flex gap-4" onSubmit={handleSubmitClient}>
            <p>add client here :</p>
            <button className="border p-1" type="submit">add</button>
          </form>
          <form className="flex gap-4" onSubmit={handleSubmitLocation}>
            <p>add client here :</p>
            <button className="border p-1" type="submit">add</button>
          </form>
        </div>
      </div>
    </>
  );
}
