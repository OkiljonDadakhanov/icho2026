"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoPlayerProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  videoUrl: string
}

export function VideoPlayer({ isOpen, setIsOpen, videoUrl }: VideoPlayerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 bg-black border-0">
        <div className="aspect-video">
          <iframe
            src={isOpen ? videoUrl : ""}
            title="IChO 2026 Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
