"use client";

import { Switch } from "@/components/ui/switch";
import {
  FilePen,
  Frame,
  MessageSquare,
  MousePointer2,
  PenTool,
  Ruler,
  Sparkles,
  Square,
  Type,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isDevMode, setIsDevMode] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-sky-300">
      <div className="px-3 py-2 bg-neutral-50 rounded-md flex gap-3 items-center shadow-md">
        <div className="flex gap-6 items-center">
          {isDevMode ? (
            <>
              <MousePointer2 />
              <Ruler />
              <FilePen />
              <MessageSquare />
            </>
          ) : (
            <>
              <MousePointer2 />
              <Frame />
              <Square />
              <PenTool />
              <Type />
              <MessageSquare />
              <Sparkles />
            </>
          )}
        </div>
        <div className="w-0.5 self-stretch bg-neutral-200 -my-2" />
        <Switch checked={isDevMode} onCheckedChange={setIsDevMode} />
      </div>
    </main>
  );
}
