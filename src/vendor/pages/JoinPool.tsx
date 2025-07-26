import { useState } from "react";
import { VendorLayout } from "../components/VendorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Users, Plus } from "lucide-react";

const poolData = [
  {
    id: 1,
    item: "Fresh Potatoes",
    category: "Vegetables",
    currentQuantity: 180,
    targetQuantity: 200,
    vendorsJoined: 12,
    deadline: "2h 15m",
    priceRange: "₹15-18/kg",
    escrowDeposit: "₹150"
  },
  {
    id: 2,
    item: "Organic Tomatoes", 
    category: "Vegetables",
    currentQuantity: 95,
    targetQuantity: 150,
    vendorsJoined: 8,
    deadline: "4h 30m",
    priceRange: "₹25-30/kg",
    escrowDeposit: "₹200"
  },
  {
    id: 3,
    item: "Fresh Milk",
    category: "Dairy",
    currentQuantity: 240,
    targetQuantity: 300,
    vendorsJoined: 15,
    deadline: "1h 45m",
    priceRange: "₹45-50/L",
    escrowDeposit: "₹300"
  },
  {
    id: 4,
    item: "Bananas",
    category: "Fruits", 
    currentQuantity: 120,
    targetQuantity: 200,
    vendorsJoined: 9,
    deadline: "6h 20m",
    priceRange: "₹40-45/kg",
    escrowDeposit: "₹180"
  }
];

export function JoinPool() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPool, setSelectedPool] = useState<typeof poolData[0] | null>(null);
  const [quantity, setQuantity] = useState("");

  const filteredPools = selectedCategory === "All" 
    ? poolData 
    : poolData.filter(pool => pool.category === selectedCategory);

  return (
    <VendorLayout title="Join a Pool">
      <div className="space-y-6">
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="category">Category:</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Vegetables">Vegetables</SelectItem>
                <SelectItem value="Fruits">Fruits</SelectItem>
                <SelectItem value="Dairy">Dairy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Pool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPools.map((pool) => {
            const progressPercentage = (pool.currentQuantity / pool.targetQuantity) * 100;
            
            return (
              <Card key={pool.id} className="bg-secondary/30 p-5 rounded-xl shadow-md border border-border">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                      {pool.item}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {pool.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <Users className="inline h-4 w-4 mr-1" />
                    You and {pool.vendorsJoined} other vendors have joined
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Group Goal:</span>
                      <span className="font-medium">
                        {pool.currentQuantity}kg / {pool.targetQuantity}kg Pooled
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>

                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Expected Price:</span>
                      <span className="font-medium">{pool.priceRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Escrow Deposit:</span>
                      <span className="font-medium">{pool.escrowDeposit}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-orange-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Bidding closes in: {pool.deadline}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-cta hover:bg-cta/90 text-cta-foreground"
                        onClick={() => setSelectedPool(pool)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Join Pool
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Join the {selectedPool?.item} Pool</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="quantity">Your Quantity (in kg)</Label>
                          <Input
                            id="quantity"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        
                        <div className="bg-secondary p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Order Summary</h4>
                          <div className="text-sm space-y-1">
                            <div className="flex justify-between">
                              <span>Quantity:</span>
                              <span>{quantity || "0"}kg</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Required Deposit (10%):</span>
                              <span>{selectedPool?.escrowDeposit}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground">
                          Confirm & Pay Deposit
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </VendorLayout>
  );
}