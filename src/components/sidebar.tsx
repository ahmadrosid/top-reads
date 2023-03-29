import { Button } from "@/components/ui/button";
import { Album, Bird, Refrigerator } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[250px] border-r px-4 dark:text-zinc-100 dark:border-zinc-700">
      <div className="py-6">
        <h2 className="inline-flex gap-4 items-center font-semibold text-2xl tracking-tight">
          <Album />
          Top Reads
        </h2>
      </div>
      <h3 className="pb-4 text-lg tracking-tight font-semibold">Categories</h3>
      <div className="space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Refrigerator className="w-4 h-4 mr-3" />
          <span>Fiction</span>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Bird className="w-4 h-4 mr-3" />
          <span>Non Fiction</span>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Bird className="w-4 h-4 mr-3" />
          <span>Science Fiction</span>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Bird className="w-4 h-4 mr-3" />
          <span>Reference</span>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Bird className="w-4 h-4 mr-3" />
          <span>Thriller</span>
        </Button>
      </div>
    </div>
  );
}
