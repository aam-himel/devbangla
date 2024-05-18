import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from './button'
  
 export const MobileMenuSheet = () => {
    const components: { title: string; href: string; description: string }[] = [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
      ]
      
      const programming: {title: string; href: string; description: string }[] = [
        {
          title: "C programming",
          href: "#",
          description:
            "Learn c programming",
        },
        {
          title: "C++ programming",
          href: "#",
          description:
            "Learn c++ programming",
        },
        {
          title: "Java programming",
          href: "#",
          description:
            "Learn Java programming",
        },
        {
          title: "Python programming",
          href: "#",
          description:
            "Learn Python programming",
        },
      
      ]
      const roadmap: {title: string; href: string; description: string }[] = [
        {
          title: "Frontend Developer",
          href: "#",
          description:
            "Frontend Developer Roadmap",
        },
        {
          title: "Backend Developer",
          href: "#",
          description:
            "Backend Developer Roadmap",
        },
        {
          title: "React Developer",
          href: "#",
          description:
            "Everything that is there to learn about React and the ecosystem in 2024.",
        },
        {
          title: "ASP.NET Core Developer",
          href: "#",
          description:
            "Step by step guide to becoming an ASP.NET core developer in 2024",
        },
      
      ]
  return (
    <Sheet>
  <SheetTrigger>
  
    <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F2404" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg></button>

  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>

        <ul>
            <li>
                <a href="#">Item 1</a>
            </li>
            <li>
                <a href="#">Item 1</a>
            </li>
            <li>
                <a href="#">Item 1</a>
            </li>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
