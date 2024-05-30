import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { Badge } from "flowbite-react";

type Props = {
  params: {
    slug: string;
  };
};

const getData = async (id: string) => {
  try {
    const res = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
    return res.json();
  } catch (error) {
    throw new Error("Couldn't fetch");
  }
};

export default async function DetailPokemon({ params }: Props) {
  const id = params.slug;
  const data = await getData(id);
  return (
    <div>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
      >
        <Image src={data.imageUrl} alt={data.name} width={200} height={200} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <div className="flex gap-2">
          <Badge color="info">{data.types[0]}</Badge>
          <Badge color="info">{data.types[1]}</Badge>
        </div>
      </Card>
    </div>
  );
}
