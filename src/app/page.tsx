import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  try {
    const res = await fetch(`https://pokeapi.deno.dev/pokemon?limit=20`);
    return res.json();
  } catch (error) {
    throw new Error("Couldn't fetch");
  }
};

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div className="w-full mt-2">
        <div className="container max-w-6xl mx-auto flex flex-wrap gap-3">
          {data.map((item: any) => (
            <Link key={item.id} href={`/pokemon/${item.id}`}>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={200}
                  height={200}
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
