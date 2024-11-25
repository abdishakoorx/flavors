import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { HeaderProvider } from "@/app/context/header-context";
import { HeaderWithName } from "./HeadernameProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeaderProvider>
      <main>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <HeaderWithName />
            <main className="px-10 p-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </main>
    </HeaderProvider>
  );
}
