"use client"
import { Github, Linkedin, Mail, User, FolderKanban } from "lucide-react"
import type React from "react"

import Link from "next/link"
import { useState, useRef } from "react"

export const Dock = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [badgeStyle, setBadgeStyle] = useState({ left: 0, opacity: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { id: "proyectos", label: "Projects", icon: FolderKanban, href: "#proyectos" },
    { id: "sobre-mi", label: "About me", icon: User, href: "#sobre-mi" },
  ]

  const contactItems = [
    { id: "github", label: "GitHub", icon: Github, href: "https://github.com/VictorRoe" },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/victorrangelromero/" },
    { id: "email", label: "Email", icon: Mail, href: "mailto:victorrangele819@gmail.com?subject=Hello%20I%20want%20to%20work%20with%20you!" },
  ]

  const updateBadgePosition = (element: HTMLElement) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      const relativeLeft = elementRect.left - containerRect.left
      const centerPosition = relativeLeft + elementRect.width / 2
      setBadgeStyle({ left: centerPosition, opacity: 1 })
    }
  }

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, itemId: string) => {
    setHoveredItem(itemId)
    updateBadgePosition(event.currentTarget)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
    setBadgeStyle((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div
        ref={containerRef}
        className="relative bg-black/80 backdrop-blur-md rounded-2xl p-1 flex items-center shadow-lg border border-white/10"
      >
        <div
          className="absolute -top-8 bg-black/90 backdrop-blur-md text-white text-sm px-3 py-1 rounded-lg border border-white/10 pointer-events-none transition-all duration-300 ease-out whitespace-nowrap"
          style={{
            left: badgeStyle.left,
            opacity: badgeStyle.opacity,
            transform: `translateX(-50%) ${badgeStyle.opacity > 0 ? "translateY(0)" : "translateY(4px)"}`,
          }}
        >
          {hoveredItem && (
            <>
              {menuItems.find((item) => item.id === hoveredItem)?.label ||
                contactItems.find((item) => item.id === hoveredItem)?.label}
            </>
          )}
        </div>

        <div className="flex items-center px-4 border-r border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white text-sm font-medium">Disponible</span>
          </div>
        </div>

        <div className="flex items-center px-6 py-3 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              onMouseEnter={(e) => handleMouseEnter(e, item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <item.icon className="w-5 h-5" />
            </Link>
          ))}

          <div className="flex items-center gap-3 pl-6 border-l border-white/10">
            {contactItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                target={item.id !== "email" ? "_blank" : undefined}
                className="flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                onMouseEnter={(e) => handleMouseEnter(e, item.id)}
                onMouseLeave={handleMouseLeave}
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
