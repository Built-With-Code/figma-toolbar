"use client";

import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "framer-motion";
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
      <motion.div
        layout
        className="relative px-3 py-2 bg-neutral-50 rounded-md flex gap-3 items-center shadow-md overflow-hidden"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {isDevMode ? (
            <motion.div
              className="flex gap-6 items-center"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ type: "spring", bounce: 0 }}
              key="dev-toolbar"
              layout
            >
              <MousePointer2 />
              <Ruler />
              <FilePen />
              <MessageSquare />
            </motion.div>
          ) : (
            <motion.div
              className="flex gap-6 items-center"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ type: "spring", bounce: 0 }}
              key="design-toolbar"
              layout
            >
              <MousePointer2 />
              <Frame />
              <Square />
              <PenTool />
              <Type />
              <MessageSquare />
              <Sparkles />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="w-0.5 self-stretch bg-neutral-200 -my-2"
          layout
        />
        <motion.div layout className="flex items-center">
          <Switch checked={isDevMode} onCheckedChange={setIsDevMode} />
        </motion.div>
      </motion.div>
    </main>
  );
}
