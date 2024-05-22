import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Abyssinian",
    url: "https://cdn2.thecatapi.com/images/776.jpg",
  },
  { id: 2, name: "Bombay", url: "https://cdn2.thecatapi.com/images/9uh.jpg" },
  {
    id: 3,
    name: "Cheetoh",
    url: "https://cdn2.thecatapi.com/images/9cbCzlbJt.jpg",
  },
  { id: 4, name: "Donskoy", url: "https://cdn2.thecatapi.com/images/cvi.jpg" },
];

export async function GET() {
  return NextResponse.json({ status: 200, message: "success", data: data });
}
