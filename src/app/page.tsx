import { Card } from "flowbite-react";
import Image from "next/image";

export default async function Home() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiURL}/api`);
  if (!res.ok) {
    throw new Error("Couldn't fetch");
  }
  const { data } = await res.json();
  // const data = [
  //   {
  //     id: 1,
  //     name: "Abyssinian",
  //     url: "https://cdn2.thecatapi.com/images/776.jpg",
  //   },
  //   { id: 2, name: "Bombay", url: "https://cdn2.thecatapi.com/images/9uh.jpg" },
  //   {
  //     id: 3,
  //     name: "Cheetoh",
  //     url: "https://cdn2.thecatapi.com/images/9cbCzlbJt.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Donskoy",
  //     url: "https://cdn2.thecatapi.com/images/cvi.jpg",
  //   },
  // ];
  return (
    <>
      <div className="w-full mt-2">
        <div className="container max-w-6xl mx-auto flex gap-3">
          {data.map((item: any) => (
            <Card
              key={item.id}
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
            >
              <Image src={item.url} alt={item.name} width={200} height={200} />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
