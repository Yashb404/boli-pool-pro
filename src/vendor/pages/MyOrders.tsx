import { VendorLayout } from "../components/VendorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const activeOrders = [
  {
    id: 1,
    item: "Fresh Potatoes",
    quantity: "25kg",
    status: "Pooling",
    finalPrice: "₹16/kg",
    totalCost: "₹400",
    deadline: "2h 15m"
  },
  {
    id: 2,
    item: "Organic Tomatoes",
    quantity: "15kg", 
    status: "Won",
    finalPrice: "₹28/kg",
    totalCost: "₹420",
    deadline: "Delivered"
  },
  {
    id: 3,
    item: "Fresh Milk",
    quantity: "20L",
    status: "Pooling",
    finalPrice: "₹48/L",
    totalCost: "₹960",
    deadline: "1h 45m"
  }
];

const orderHistory = [
  {
    id: 4,
    item: "Bananas",
    quantity: "30kg",
    status: "Delivered",
    finalPrice: "₹42/kg",
    totalCost: "₹1,260",
    date: "2024-01-15"
  },
  {
    id: 5,
    item: "Onions",
    quantity: "50kg",
    status: "Lost",
    finalPrice: "-",
    totalCost: "₹0",
    date: "2024-01-10"
  },
  {
    id: 6,
    item: "Carrots",
    quantity: "20kg",
    status: "Delivered",
    finalPrice: "₹35/kg",
    totalCost: "₹700",
    date: "2024-01-08"
  }
];

function getStatusBadge(status: string) {
  switch (status) {
    case "Pooling":
      return <Badge className="bg-status-pooling-foreground text-status-pooling">{status}</Badge>;
    case "Won":
      return <Badge className="bg-status-won-foreground text-status-won">{status}</Badge>;
    case "Delivered":
      return <Badge className="bg-purple-100 text-purple-800">{status}</Badge>;
    case "Lost":
      return <Badge className="bg-status-lost-foreground text-status-lost">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export function MyOrders() {
  return (
    <VendorLayout title="My Orders">
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="active">Active Pools</TabsTrigger>
          <TabsTrigger value="history">Order History</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card className="bg-card rounded-xl shadow-md border border-border">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary">
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Item</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">My Quantity</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Status</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Final Price (per unit)</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">My Total Cost</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Deadline</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.item}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>{order.finalPrice}</TableCell>
                      <TableCell className="font-medium">{order.totalCost}</TableCell>
                      <TableCell>{order.deadline}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="bg-card rounded-xl shadow-md border border-border">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary">
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Item</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">My Quantity</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Status</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Final Price (per unit)</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">My Total Cost</TableHead>
                    <TableHead className="text-muted-foreground uppercase text-sm font-medium">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderHistory.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.item}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>{order.finalPrice}</TableCell>
                      <TableCell className="font-medium">{order.totalCost}</TableCell>
                      <TableCell>{order.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </VendorLayout>
  );
}