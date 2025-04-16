"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { truncate } from "@/lib/helper";
import { HiMenu, HiX } from "react-icons/hi"; // using heroicons for hamburger

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About AquES",
    href: "/about",
    description: "Understand more about AquES",
  },
  {
    title: "Our Team",
    href: "/about/ourteam",
    description: "Get in touch with the AquES team",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-2xl sticky top-0 z-50">
      {/* Main Container */}
      <div className="flex items-center justify-between w-11/12 lg:w-2/3 xl:w-[80%] mx-auto py-5">
        <div>
          <a href="/">
            <h1 className="text-2xl font-semibold leading-tight">
              <span className="text-cyan-600">Aqu</span>ES
            </h1>
            <p className="text-xs font-light leading-tight">
              Aquatic &amp; Environmental Sciences
            </p>
          </a>
        </div>

        {/* Desktop Navigation: visible only at lg and up */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Research</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent hover:text-accent-foreground"
                          href="/research"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Our Research
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            At AQUES, our research is dedicated to studying
                            various aspects of the Anthropocene.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/research/greenhouse-gas-emissions"
                      title="Greenhouse Gas Emissions"
                    >
                      Aquatic Emissions Research | Climate Change Interactions |
                      Modelling and Prediction
                    </ListItem>
                    <ListItem
                      href="/research/microplastics-pollution"
                      title={truncate(
                        "Microplastics Pollution and Bioremediation"
                      )}
                    >
                      Investigation of Sources and Distribution | Impact
                      Assessment | Microbial Bioremediation Solutions
                    </ListItem>
                    <ListItem
                      href="/research/environmental-microbiology"
                      title="Environmental Microbiology"
                    >
                      Microbial Diversity Studies | Endophyte Research | Coral
                      Microbiome Studies | Biogeochemical Cycles
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/publications" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Publications
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/tide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Tide
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Toggle: visible below lg */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="focus:outline-none"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-2 p-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Research</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4">
                    <ListItem
                      href="/research/greenhouse-gas-emissions"
                      title="Greenhouse Gas Emissions"
                    >
                      Aquatic Emissions, Climate Change, Modelling
                    </ListItem>
                    <ListItem
                      href="/research/microplastics-pollution"
                      title={truncate(
                        "Microplastics Pollution and Bioremediation"
                      )}
                    >
                      Sources, Impact, and Remediation
                    </ListItem>
                    <ListItem
                      href="/research/environmental-microbiology"
                      title="Environmental Microbiology"
                    >
                      Microbial Studies and Biogeochemistry
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/publications" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Publications
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/tide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Tide
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
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
  );
});
ListItem.displayName = "ListItem";
