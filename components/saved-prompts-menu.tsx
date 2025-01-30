import { Loader2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SavedPrompt {
  id: string
  title: string
  content: string
}

interface SavedPromptsMenuProps {
  input: string
  isFetchingSavedPrompts: boolean
  savedPrompts: SavedPrompt[]
  filteredPrompts: SavedPrompt[]
  onPromptClick: (subtitle: string) => void
  updatePromptLastUsedAt: (id: string) => Promise<void>
}

export const SavedPromptsMenu = ({
  input,
  isFetchingSavedPrompts,
  savedPrompts,
  filteredPrompts,
  onPromptClick,
  updatePromptLastUsedAt,
}: SavedPromptsMenuProps) => (
  <Card
    className="absolute bottom-[150px] left-0 z-[100] w-full max-h-[300px] min-h-[70px] overflow-hidden"
    style={{ display: input.startsWith("/") ? "block" : "none" }}
  >
    <CardHeader className="p-4">
      <CardTitle className="text-lg">Saved Prompts</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <ScrollArea className="h-[230px]">
        {isFetchingSavedPrompts ? (
          <div className="flex h-full w-full items-center justify-center p-4">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : savedPrompts.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center p-4 text-muted-foreground">
            No prompts saved yet
          </div>
        ) : filteredPrompts.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center p-4 text-muted-foreground">No match found</div>
        ) : (
          <div className="space-y-2 p-4">
            {filteredPrompts.map((filteredPrompt) => (
              <div
                key={filteredPrompt.id}
                onClick={() => {
                  onPromptClick(filteredPrompt.content)
                  updatePromptLastUsedAt(filteredPrompt.id)
                }}
                className="cursor-pointer rounded-lg bg-primary/10 p-3 transition-colors duration-200 hover:bg-primary/5"
              >
                <p className="font-medium truncate">{filteredPrompt.title}</p>
                <p className="text-sm text-muted-foreground truncate">{filteredPrompt.content}</p>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </CardContent>
  </Card>
)

export default SavedPromptsMenu

