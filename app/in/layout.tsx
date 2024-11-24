import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ui/mode-toggler";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16  w-full items-center gap-2">
            <div className="flex w-full items-center justify-between gap-2 px-4">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="hover:bg-transparent" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </div>
              <ModeToggle />
            </div>
          </header>
          <main className="px-10 p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
