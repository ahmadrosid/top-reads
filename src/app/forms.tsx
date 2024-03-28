"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Icons } from "@/components/icons";

function isYouTubeUrl(url: string) {
  // Regular expression to match YouTube URLs
  var regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return regex.test(url);
}

async function fetchTranscript(formData: FormData) {
  let url = "https://api.ahmadrosid.com/youtube/summarize";
  let requestBody = JSON.stringify({
    videoUrl: formData.get("youtube_url"),
  });

  if (!isYouTubeUrl(formData.get("youtube_url") as string)) {
    url = "https://api.ahmadrosid.com/website/summarize";
    requestBody = JSON.stringify({
      url: formData.get("youtube_url"),
    });
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  })
  return await response.json();
}

export default function FormTranscribe({ onResponse, onSubmit }: { onSubmit: () => void, onResponse: (data: any) => void}) {
const [loading, setLoading] = useState(false);
  return (
    <form onSubmit={async (el) => {
        setLoading(true);
        onSubmit();
        el.preventDefault();
        try {
          const result = await fetchTranscript(new FormData(
              el.target as HTMLFormElement
          ));
          onResponse(result);
        } catch(e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
    }} className="flex gap-2 w-full">
      <Input name="youtube_url" placeholder="Enter youtube or web page link..." />
      <Button type="submit" disabled={loading}>
        {loading ? <Icons.spinner className="h-5 w-5 animate-spin" /> : "Go"}
      </Button>
    </form>
  );
}
