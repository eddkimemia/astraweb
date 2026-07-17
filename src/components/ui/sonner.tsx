"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "#0B2C6B",
          "--normal-text": "#FFFFFF",
          "--normal-border": "#165DFF",
          "--success-bg": "#0B2C6B",
          "--success-text": "#FFFFFF",
          "--success-border": "#165DFF",
          "--error-bg": "#E31B23",
          "--error-text": "#FFFFFF",
          "--error-border": "#E31B23",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
