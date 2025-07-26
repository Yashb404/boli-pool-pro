import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">
            Welcome to Boli-Lagao
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering street vendors with group purchasing power. Join pools, save money, and grow your business.
          </p>
          <Button asChild className="bg-cta hover:bg-cta/90 text-cta-foreground text-lg px-8 py-3">
            <Link to="/vendor">
              Access Vendor Dashboard
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6">
            <CardHeader>
              <Users className="h-12 w-12 text-cta mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">Join Order Pools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access group purchasing opportunities across your region with clear progress indicators.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <ShoppingCart className="h-12 w-12 text-cta mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">Manage Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Comprehensive tracking of your commitments to pools and order status monitoring.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-cta mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">Track Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transparent record of all transactions, including deposits and final payments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
