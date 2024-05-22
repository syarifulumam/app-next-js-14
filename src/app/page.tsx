import { Card } from "flowbite-react";
import Image from "next/image";

const getData = async () => {
  try {
    const respownse = await fetch("http://localhost:3000/api");
    return respownse.json();
  } catch (error) {
    console.log(error);
  }
};

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
