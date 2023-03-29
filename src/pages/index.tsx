import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Book - Help you to find a book to read.</title>
        <meta name="description" content="Help you to find a book to read." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <div className="p-4 flex gap-4">
            <Input placeholder="Book title, Author, Publisher, ISBN" />
            <Button>Search</Button>
          </div>
          <Separator />
          <div className="p-4 h-[90vh] overflow-y-auto">
            <div className="pb-4">
              <h2 className="text-3xl tracking-tight font-semibold">
                Top books now
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-2 p-2 hover:cursor-pointer">
                    <img
                      src="https://austinkleon.com/wp-content/uploads/2021/12/steal-10th_3D-1358x1536.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="tracking-tight font-semibold text-lg">
                        Steal Like an Artist
                      </h2>
                      <p className="text-slate-500 tracking-tight">
                        Austin Kleon
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
