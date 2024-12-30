"use client";

import { Button } from "@/components/ui/button";
import { Leaf, Menu, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Satellite Edge Computing",
    description: "Edge computing solutions for satellite data",
    href: "/products/satellite-edge",
    icon: "🛰️",
  },
  {
    title: "Carbon Data Dashboard",
    description: "Real-time carbon monitoring dashboard",
    href: "https://www.carbonmonitor-graced.com/index.html",
    icon: "📊",
    external: true,
  },
  {
    title: "Global Decision System",
    description: "AI-powered decision making platform",
    href: "/products/decision-system",
    icon: "🌍",
  },
];

const developers = [
  {
    title: "Documentation",
    description: "Detailed API references and integration guides",
    href: "/developers/docs",
    icon: "🛠️",
  },
];

const resources = [
  {
    title: "Careers",
    description: "Join us for career opportunities",
    href: "/resources/careers",
    icon: "🌱",
  },
  {
    title: "Meet the Team",
    description: "The experts behind Carbon Infinity",
    href: "/resources/team",
    icon: "👥",
  },
];

const research = [
  {
    title: "Mining Detection",
    description:
      "AI-powered detection of mining activities using satellite data",
    href: "/research/mining-detection",
    icon: "🔍",
  },
];

export function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);

  const sections = [
    {
      title: "Products",
      items: products,
      id: "products",
    },
    {
      title: "Research",
      items: research,
      id: "research",
    },
    {
      title: "Developers",
      items: developers,
      id: "developers",
    },
    {
      title: "Resources",
      items: resources,
      id: "resources",
    },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 flex items-center bg-background/100 backdrop-blur-md border-b border-border z-[60]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center space-x-2" href="/">
          <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
          <span className="text-xl font-bold text-foreground">
            Carbon Infinity
          </span>
        </Link>

        {/* Navigation Menu - Centered */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="relative space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground transition-colors bg-background/50 backdrop-blur-sm rounded-lg">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0">
                <div className="grid gap-4 p-6 w-[400px]">
                  {products.map((product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                      className="group grid grid-cols-[40px_1fr] gap-2 rounded-lg p-2 hover:bg-muted"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border bg-background text-xl">
                        {product.icon}
                      </span>
                      <div>
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {product.title}
                          {product.external && (
                            <ExternalLink className="inline-block h-4 w-4 ml-1" />
                          )}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground transition-colors bg-background/50 backdrop-blur-sm rounded-lg">
                Research
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-4 p-6 w-[400px]">
                  {research.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group grid grid-cols-[40px_1fr] gap-2 rounded-lg p-2 hover:bg-muted"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border bg-background text-xl">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground bg-background/50 backdrop-blur-sm rounded-lg">
                Developers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-4 p-6 w-[400px]">
                  {developers.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group grid grid-cols-[40px_1fr] gap-2 rounded-lg p-2 hover:bg-muted"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border bg-background text-xl">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground transition-colors bg-background/50 backdrop-blur-md rounded-lg">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-4 p-6 w-[400px]">
                  {resources.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group grid grid-cols-[40px_1fr] gap-2 rounded-lg p-2 hover:bg-muted"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border bg-background text-xl">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="bg-green-600 text-white hover:bg-green-700"
              asChild
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              console.log("Toggle menu clicked", !mobileMenuOpen);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            {/* Sign In/Up Section */}
            <div className="flex flex-col gap-2 p-4 border-b border-border">
              <Button variant="ghost" size="sm" asChild className="justify-center">
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="bg-green-600 text-white hover:bg-green-700 justify-center"
                asChild
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Dynamic Sections */}
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                  onClick={() => {
                    switch (section.id) {
                      case "products":
                        setProductsOpen(!productsOpen);
                        break;
                      case "developers":
                        setDevelopersOpen(!developersOpen);
                        break;
                      case "resources":
                        setResourcesOpen(!resourcesOpen);
                        break;
                      case "research":
                        setResearchOpen(!researchOpen);
                        break;
                    }
                  }}
                >
                  {section.title}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      (section.id === "products" && productsOpen) ||
                      (section.id === "developers" && developersOpen) ||
                      (section.id === "resources" && resourcesOpen) ||
                      (section.id === "research" && researchOpen)
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {((section.id === "products" && productsOpen) ||
                  (section.id === "developers" && developersOpen) ||
                  (section.id === "resources" && resourcesOpen) ||
                  (section.id === "research" && researchOpen)) && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-100">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        className="group flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                        href={item.href}
                        target={'external' in item ? "_blank" : undefined}
                        rel={'external' in item ? "noopener noreferrer" : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-md border bg-background text-lg">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-medium">
                            {item.title}
                            {('external' in item) && (
                              <ExternalLink className="inline-block h-3 w-3 ml-1" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
