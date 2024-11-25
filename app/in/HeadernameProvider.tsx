'use client'

import { useHeader } from "@/app/context/header-context"
import { ModeToggle } from "@/components/ui/mode-toggler"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function HeaderWithName() {
  const { headerName } = useHeader()
  
  return (
    <header className="flex h-16 w-full items-center gap-2">
      <div className="flex w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="hover:bg-transparent" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {headerName && <span className="text-lg font-medium">{headerName}</span>}
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
