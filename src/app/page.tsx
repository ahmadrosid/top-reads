"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

const books = [
  {
    image:
      "https://m.media-amazon.com/images/I/41D0JD53t9L._SY495_BO1,204,203,200_.jpg",
    title: "Steal Like an Artist",
    author: "Austin Kleon",
  },
  {
    image: "https://m.media-amazon.com/images/I/81Ikr2KRkdL.jpg",
    title: "Branding Is Sex",
    author: "Deb Gabor",
  },
  {
    image: "https://m.media-amazon.com/images/I/51B12SO5RGL.jpg",
    title: "Big Magic: Creative Living Beyond Fear",
    author: "Elizabeth Gilbert",
  },
  {
    image: "https://m.media-amazon.com/images/I/51gJpbOQpHL.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    image: "https://m.media-amazon.com/images/I/513HPYc84LL.jpg",
    title:
      "Find Your Artistic Voice: The Essential Guide to Working Your Creative Magic",
    author: "Lisa Congdon",
  },
  {
    image: "https://m.media-amazon.com/images/I/41WfTgpnVgL.jpg",
    title: "Make Your Art No Matter What: Moving Beyond Creative Hurdles",
    author: "Beth Pickens",
  },
  {
    image:
      "https://m.media-amazon.com/images/P/B000FA675C.01._SCLZZZZZZZ_SX500_.jpg",
    title: "The Da Vinci Code",
    author: "Dan Brown",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/518qiLwlQ0L._SX427_BO1,204,203,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    image: "https://m.media-amazon.com/images/I/41jia8KTK2L.jpg",
    title: "Two Weeks Notice",
    author: "Amy Porterfield",
  },
];

export default function Home() {
  return (
    <main className="flex h-screen dark:bg-zinc-900">
      <Sidebar />
      <div className="flex-1">
        <div className="p-4 flex gap-4">
          <Input placeholder="Book title, Author, Publisher, ISBN" />
          <Button>Search</Button>
        </div>
        <ScrollArea className="h-[90vh]">
          <div className="p-4">
            <h2 className="text-3xl tracking-tight font-semibold dark:text-zinc-100">
              New Yorks Times Best Sellers
            </h2>
            <Separator className="my-4" />
            <div className="grid grid-cols-4 gap-4">
              {books.map((book, i) => (
                <div key={i} className="space-y-2 p-2">
                  <AspectRatio
                    className="hover:cursor-pointer overflow-hidden rounded-md"
                    ratio={9 / 14}
                  >
                    <Image
                      src={book.image}
                      alt={`Photo by ${book.author}`}
                      fill
                      className="object-cover transition-all dark:brightness-75 dark:hover:brightness-100"
                    />
                  </AspectRatio>
                  <div>
                    <h2 className="tracking-tight font-semibold text-lg dark:text-zinc-300">
                      {book.title}
                    </h2>
                    <p className="text-slate-500 tracking-tight dark:text-zinc-600">
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
