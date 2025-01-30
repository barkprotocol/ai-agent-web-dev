\`\`\`tsx
import { ImageIcon, SendHorizontal } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

// ... other imports ...

function MyComponent({ userMsgWidth, userMsgHeight, aiMsgWidth, aiMsgHeight }) {
  return (
    <div>
      {/* User Message */}
      <div className="relative flex flex-col gap-2 rounded-2xl bg-[#DBCFC7] px-4 py-3 text-sm shadow-sm">
        <div
          className="animate-pulse bg-[#DBCFC7]"
          style={{
            width: `${userMsgWidth}px`,
            height: `${userMsgHeight}px`,
          }}
        />
      </div>

      {/* AI Response */}
      <div className="relative flex flex-col gap-2 rounded-2xl bg-gray-200/60 px-4 py-3 text-sm shadow-sm">
        <div
          className="animate-pulse bg-gray-200/60"
          style={{
            width: `${aiMsgWidth}px`,
            height: `${aiMsgHeight}px`,
          }}
        />
      </div>

      {/* Message Input */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <div className="min-h-[100px] w-full animate-pulse resize-none border-0 bg-transparent px-4 py-[1.3rem]" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button type="button" variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-200" disabled>
          <ImageIcon className="h-5 w-5" />
        </Button>
        <Button type="submit" size="icon" variant="ghost" disabled className="h-8 w-8 hover:bg-gray-200">
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default MyComponent
\`\`\`

