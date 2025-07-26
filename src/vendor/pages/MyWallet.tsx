import { VendorLayout } from "../components/VendorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Wallet } from "lucide-react";

const walletBalance = "₹2,450";

const transactions = [
  {
    id: 1,
    date: "2024-01-20",
    type: "Escrow Deposit",
    amount: "-₹300",
    relatedOrder: "Fresh Milk Pool",
    status: "Pending"
  },
  {
    id: 2,
    date: "2024-01-18",
    type: "Final Payment",
    amount: "-₹1,120",
    relatedOrder: "Bananas Pool",
    status: "Completed"
  },
  {
    id: 3,
    date: "2024-01-15",
    type: "Refund",
    amount: "+₹200",
    relatedOrder: "Onions Pool",
    status: "Completed"
  },
  {
    id: 4,
    date: "2024-01-12",
    type: "Escrow Deposit",
    amount: "-₹150",
    relatedOrder: "Potatoes Pool",
    status: "Completed"
  },
  {
    id: 5,
    date: "2024-01-10",
    type: "Add Funds",
    amount: "+₹5,000",
    relatedOrder: "Wallet Top-up",
    status: "Completed"
  }
];

function getTransactionBadge(status: string) {
  switch (status) {
    case "Completed":
      return <Badge className="bg-status-won-foreground text-status-won">{status}</Badge>;
    case "Pending":
      return <Badge className="bg-status-pooling-foreground text-status-pooling">{status}</Badge>;
    case "Failed":
      return <Badge className="bg-status-lost-foreground text-status-lost">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

function getAmountColor(amount: string) {
  if (amount.startsWith('+')) {
    return 'text-green-600';
  } else if (amount.startsWith('-')) {
    return 'text-red-600';
  }
  return 'text-foreground';
}

export function MyWallet() {
  return (
    <VendorLayout title="My Wallet">
      <div className="space-y-6">
        {/* Wallet Balance Card */}
        <Card className="bg-card p-6 rounded-xl shadow-md border border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-semibold text-foreground">
              Current Escrow Balance
            </CardTitle>
            <Wallet className="h-6 w-6 text-cta" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-cta">
                {walletBalance}
              </div>
              <Button className="bg-cta hover:bg-cta/90 text-cta-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Available for pool deposits and payments
            </p>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="bg-card rounded-xl shadow-md border border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="text-muted-foreground uppercase text-sm font-medium">Date</TableHead>
                  <TableHead className="text-muted-foreground uppercase text-sm font-medium">Type</TableHead>
                  <TableHead className="text-muted-foreground uppercase text-sm font-medium">Amount</TableHead>
                  <TableHead className="text-muted-foreground uppercase text-sm font-medium">Related Order</TableHead>
                  <TableHead className="text-muted-foreground uppercase text-sm font-medium">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell className="font-medium">{transaction.type}</TableCell>
                    <TableCell className={`font-medium ${getAmountColor(transaction.amount)}`}>
                      {transaction.amount}
                    </TableCell>
                    <TableCell>{transaction.relatedOrder}</TableCell>
                    <TableCell>{getTransactionBadge(transaction.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-card rounded-xl shadow-md border border-border">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
                <Plus className="h-5 w-5" />
                <span>Add Funds</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span>View Deposits</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
                <Plus className="h-5 w-5" />
                <span>Download Statement</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </VendorLayout>
  );
}