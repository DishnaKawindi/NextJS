// Home page

import Image from "next/image";
import Hello from "@/app/components/hello";

export default async function Home() {

    console.log("Home page");

    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) {
        throw new Error("Failed to fetch album data");
    }

    const albums = await response.json();

  return (
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols">
          <h1 className={"text-3xl"}>Welcome to Next.js</h1>
          <Hello/>

          {albums.map((album: {id: number, title: string}) => (
              <div key={album.id} className={"shadow-md rounded-lg p-4 transition"}>
                  <h3 className={"text-lg font-bold mb-2"}>{album.title}</h3>
                  <p className={"text-gray-600"}>{album.id}</p>
              </div>
          ))}
      </div>
  );
}
