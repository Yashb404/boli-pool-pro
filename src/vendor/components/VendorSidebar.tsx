import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  Wallet,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/vendor", icon: LayoutDashboard },
  { title: "Join a Pool", url: "/vendor/join-pool", icon: Users },
  { title: "My Orders", url: "/vendor/orders", icon: ShoppingCart },
  { title: "My Wallet", url: "/vendor/wallet", icon: Wallet },
];

export function VendorSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/vendor") {
      return currentPath === "/vendor";
    }
    return currentPath.startsWith(path);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-primary border-r border-border">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-primary-foreground mb-8">
          Vendor Dashboard
        </h1>
        
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className={`w-full justify-start text-left h-12 ${
                isActive(item.url)
                  ? "bg-primary-foreground/10 text-primary-foreground font-semibold"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/5 hover:text-primary-foreground"
              }`}
              asChild
            >
              <NavLink to={item.url}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.title}
              </NavLink>
            </Button>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center text-primary-foreground/60 text-sm">
          <User className="mr-2 h-4 w-4" />
          <span>Logged in as: vendor-001</span>
        </div>
      </div>
    </div>
  );
}