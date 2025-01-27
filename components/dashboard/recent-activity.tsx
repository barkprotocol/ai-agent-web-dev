import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentActivity = [
  {
    id: "1",
    type: "Buy",
    asset: "SOL",
    amount: "10",
    price: "$22.50",
    date: "2023-08-01",
  },
  {
    id: "2",
    type: "Sell",
    asset: "BARK",
    amount: "500",
    price: "$0.15",
    date: "2023-08-02",
  },
  {
    id: "3",
    type: "Buy",
    asset: "RAY",
    amount: "100",
    price: "$0.75",
    date: "2023-08-03",
  },
  {
    id: "4",
    type: "Sell",
    asset: "SOL",
    amount: "5",
    price: "$24.00",
    date: "2023-08-04",
  },
  {
    id: "5",
    type: "Buy",
    asset: "BARK",
    amount: "1000",
    price: "$0.14",
    date: "2023-08-05",
  },
]

export function RecentActivity() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Asset</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentActivity.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell className="font-medium">{activity.type}</TableCell>
            <TableCell>{activity.asset}</TableCell>
            <TableCell>{activity.amount}</TableCell>
            <TableCell>{activity.price}</TableCell>
            <TableCell>{activity.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

