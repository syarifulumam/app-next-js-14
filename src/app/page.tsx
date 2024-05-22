import { Card } from "flowbite-react";
import Image from "next/image";

async function getData() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(apiURL + "/api/cats", {
    cache: "no-cache",
  }).then((res) => res.json());
  return data;
}

export default async function Home() {
  const { data } = await getData();
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
