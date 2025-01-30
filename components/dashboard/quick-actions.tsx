import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  const actions = [
    { id: 1, label: "Create New Agent", onClick: () => console.log("Create New Agent clicked") },
    { id: 2, label: "Start Trading Session", onClick: () => console.log("Start Trading Session clicked") },
    { id: 3, label: "Generate Report", onClick: () => console.log("Generate Report clicked") },
    { id: 4, label: "Adjust Risk Parameters", onClick: () => console.log("Adjust Risk Parameters clicked") },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button key={action.id} onClick={action.onClick}>
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

