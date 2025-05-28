import * as React from "react"

export function Button({ className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-yellow-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
