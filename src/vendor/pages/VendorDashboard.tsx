import { VendorLayout } from "../components/VendorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Package, DollarSign } from "lucide-react";

export function VendorDashboard() {
  const dashboardStats = [
    {
      title: "Active Pools in Your Area",
      value: "12",
      icon: Package,
      description: "Pools available to join"
    },
    {
      title: "Orders Won This Month",
      value: "8",
      icon: TrendingUp,
      description: "Successful participations"
    },
    {
      title: "Total Saved (Est.)",
      value: "₹4,250",
      icon: DollarSign,
      description: "Money saved this month"
    }
  ];

  return (
    <VendorLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardStats.map((stat, index) => (
          <Card key={index} className="bg-card p-6 rounded-xl shadow-md border border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-cta mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="bg-card rounded-xl shadow-md border border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary rounded-lg text-center">
                <Package className="h-8 w-8 text-cta mx-auto mb-2" />
                <p className="text-sm font-medium">Browse Pools</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-cta mx-auto mb-2" />
                <p className="text-sm font-medium">Check Orders</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <DollarSign className="h-8 w-8 text-cta mx-auto mb-2" />
                <p className="text-sm font-medium">Add Funds</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <Package className="h-8 w-8 text-cta mx-auto mb-2" />
                <p className="text-sm font-medium">View History</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </VendorLayout>
  );
}