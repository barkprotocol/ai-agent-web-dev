import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function AgentPerformance({ userDataPromise }) {
  const userData = await userDataPromise
  const agents = userData.agents

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {agents.map((agent) => (
            <li key={agent.id} className="flex justify-between items-center">
              <span className="font-medium">{agent.name}</span>
              <div className="text-right">
                <p className={agent.performance.startsWith("+") ? "text-green-600" : "text-red-600"}>
                  {agent.performance}
                </p>
                <p className="text-sm text-gray-500">{agent.trades} trades</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

