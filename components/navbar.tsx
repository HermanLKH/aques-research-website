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
  return (
    <div className="flex justify-center w-full py-5 shadow-2xl bg-white sticky top-0 z-50">
      <ul className="flex justify-between w-11/12 md:w-3/4 lg:w-2/3 xl:w-[80%]">
        <li>
          <a href="/">
            <h1 className="text-4xl font-semibold">AquES</h1>
            <p className="text-sm font-light">
              Aquatic & Environmental Sciences
            </p>
          </a>
        </li>
        <li>
          <NavigationMenu>
            <NavigationMenuList>
              {/* Item 1 */}
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
                            various aspects of the Anthropocene, a defining
                            period characterized by significant human impact on
                            the environment.
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
                      Assessment on Ecosystems Interactions | Microbial
                      Bioremediation Solutions
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
              {/* Item 2 */}
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
              {/* Item 3 */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Live Cam
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 4 */}
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 5 */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
      </ul>
    </div>
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
