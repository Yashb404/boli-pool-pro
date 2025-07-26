import { ReactNode } from "react";
import { VendorSidebar } from "./VendorSidebar";

interface VendorLayoutProps {
  children: ReactNode;
  title: string;
}

export function VendorLayout({ children, title }: VendorLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <VendorSidebar />
      <div className="ml-64">
        <main className="container mx-auto p-8">
          <div className="pb-4 border-b border-border mb-8">
            <h1 className="text-4xl font-extrabold text-foreground">{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}