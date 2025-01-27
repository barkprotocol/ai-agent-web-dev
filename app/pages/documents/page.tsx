import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Documents | BARK AI Agent",
  description: "System Architecture and Whitepaper for BARK AI Agent",
}

export default function DocumentsPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 pt-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-center text-black">BARK AI Agent Documents</h1>
        <p className="text-sm text-gray-400 mb-12 text-center">v1.0.0</p>
        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="w-full mb-6 bg-gray-200 p-1 rounded-lg">
            <TabsTrigger
              value="architecture"
              className="w-full text-lg py-1 px-1 data-[state=active]:bg-white rounded-md transition-all"
            >
              System Architecture
            </TabsTrigger>
            <TabsTrigger
              value="whitepaper"
              className="w-full text-lg py-1 px-1 data-[state=active]:bg-white rounded-md transition-all"
            >
              Whitepaper
            </TabsTrigger>
          </TabsList>
          <TabsContent value="architecture">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
                <CardDescription>
                  Overview of the BARK AI Agent system components and their interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto mb-6">
                  <img
                    src="https://ucarecdn.com/f6029e68-9768-49db-80a9-64e41e70acff/waveblack.png"
                    alt="BARK AI Agent System Architecture"
                    className="w-full h-auto"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-100">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border p-2 text-left">Component</th>
                        <th className="border p-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Web Interface</td>
                        <td className="border p-2">The user-facing component for interacting with the system</td>
                      </tr>
                      <tr>
                        <td className="border p-2">API Gateway</td>
                        <td className="border p-2">Handles all incoming requests and routes them appropriately</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Authentication Service</td>
                        <td className="border p-2">Ensures secure access to the system</td>
                      </tr>
                      <tr>
                        <td className="border p-2">AI Engine</td>
                        <td className="border p-2">The core component that processes requests and makes decisions</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Database</td>
                        <td className="border p-2">Stores and retrieves data for the system</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Blockchain Service</td>
                        <td className="border p-2">Manages interactions with the Solana blockchain</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Strategy Manager</td>
                        <td className="border p-2">
                          Optimizes AI strategies based on performance and market conditions
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2">Transaction Manager</td>
                        <td className="border p-2">Handles the execution of transactions on the blockchain</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Analytics Engine</td>
                        <td className="border p-2">
                          Provides data analysis and insights to improve system performance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="whitepaper">
            <Card>
              <CardHeader>
                <CardTitle>BARK AI Agent Whitepaper</CardTitle>
                <CardDescription>
                  Detailed explanation of the BARK AI Agent system, its features, and technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">1. Introduction</h2>
                  <p>
                    BARK AI Agent is an advanced artificial intelligence system designed to revolutionize trading and
                    interactions on the Solana blockchain. By leveraging cutting-edge AI algorithms and blockchain
                    technology, BARK AI Agent aims to provide users with unparalleled trading strategies, real-time
                    market analysis, and seamless DeFi integrations.
                  </p>

                  <h2 className="text-2xl font-semibold">2. Technology Stack</h2>
                  <p>The BARK AI Agent is built on a robust technology stack that includes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Solana blockchain for high-speed, low-cost transactions</li>
                    <li>Advanced machine learning algorithms for market prediction and strategy optimization</li>
                    <li>Secure, scalable cloud infrastructure for reliable performance</li>
                    <li>Real-time data processing for instant market insights</li>
                  </ul>

                  <h2 className="text-2xl font-semibold">3. Key Features</h2>
                  <p>BARK AI Agent offers a range of features designed to enhance the trading experience:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>AI-powered trading strategies</li>
                    <li>Real-time market analysis and insights</li>
                    <li>Automated portfolio management</li>
                    <li>DeFi protocol integrations</li>
                    <li>Risk management tools</li>
                    <li>Community-driven insights and collaboration</li>
                  </ul>

                  <p className="text-sm text-muted-foreground mt-4">
                    This is a placeholder for the whitepaper content. The full whitepaper would include more detailed
                    sections on tokenomics, governance, ecosystem, roadmap, and disclaimer information.
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
                    asChild
                  >
                    <a
                      href="https://barkprotocol.net/BARK-AI-Agent-Whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download Full Whitepaper
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

