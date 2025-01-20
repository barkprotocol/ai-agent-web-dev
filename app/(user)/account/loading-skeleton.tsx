import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export function LoadingStateSkeleton() {
  return (
    <div className="flex flex-1 flex-col py-8">
      <div className="w-full px-8">
        <div className="max-w-3xl space-y-6">
          {/* Profile Information Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">Profile Information</h2>

            <Card className="bg-sidebar">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-10 w-10 rounded-lg" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-40" />
                    </div>
                  </div>

                  <Separator className="bg-sidebar-accent/50" />

                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-muted-foreground">Account ID</Label>
                      <div className="mt-1">
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Early Access Program</Label>
                      <div className="mt-1 flex h-8 items-center">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="ml-auto h-8 w-32" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Connected Accounts Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">Connected Accounts</h2>

            <Card className="bg-sidebar">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {["Wallet", "Twitter", "Email", "Discord"].map((account) => (
                    <div key={account} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Skeleton className="h-9 w-9 rounded-lg" />
                        <div className="space-y-1">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                      <Skeleton className="h-8 w-20 rounded-md" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Privy Embedded Wallet Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">Privy Embedded Wallets</h2>
            <Card className="bg-sidebar">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div>
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="mt-1 h-3 w-32" />
                      </div>
                    </div>
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Legacy Embedded Wallet Section */}
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-muted-foreground">Legacy Embedded Wallet</h2>
            <Card className="bg-sidebar">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">Public Key</Label>
                    <div className="mt-1">
                      <Skeleton className="h-6 w-full" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Balance</Label>
                    <div className="mt-1">
                      <Skeleton className="h-8 w-32" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-9 w-24 rounded-md" />
                    <Skeleton className="h-9 w-24 rounded-md" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}

