import * as React from "react"

export function Card({ className, children }) {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>{children}</div>
}

export function CardContent({ children, className }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
