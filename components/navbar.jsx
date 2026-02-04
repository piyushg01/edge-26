"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "./animation-container";
import { cn } from "@/utils/functions/cn";
import { NAV_LINKS } from "@/utils/constants/nav-links";
import { useCurrentUser } from "@/hooks/user/useCurrentUser";
import { useAuthActions } from "@convex-dev/auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { data: user } = useCurrentUser();
  const { signOut } = useAuthActions();
  const pathname = usePathname();
  
  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-5 left-1/2 transform -translate-x-1/2 w-[85%] max-w-6xl h-16 z-50 select-none",
        "bg-black/40 backdrop-blur-xl rounded-3xl",
        "border border-white/15",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        scroll && "bg-black/50 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-12">
            <Link href="/#home" className="w-28 flex-shrink-0 transition-transform hover:scale-105 duration-200">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                height={1024}
                width={1024}
                className="text-white drop-shadow-lg"
              />
            </Link>

            <NavigationMenu className="hidden lg:flex flex-1 justify-center">
              <NavigationMenuList className="gap-7">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.menu ? (
                      <>
                        <NavigationMenuTrigger className="text-white/80 hover:text-white text-sm font-medium bg-transparent hover:bg-white/10 data-[state=open]:bg-white/15 rounded-full px-4 transition-all duration-200 border border-transparent hover:border-white/20">
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              "grid gap-2 p-4 md:w-[400px] lg:w-[500px] rounded-2xl",
                              "bg-black/95 backdrop-blur-xl border border-white/20",
                              "shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
                              link.title === "Event"
                                ? "lg:grid-cols-[.75fr_1fr]"
                                : "lg:grid-cols-2"
                            )}
                          >
                            {link.title === "Event" && (
                              <li className="row-span-4 pr-2 relative rounded-xl overflow-hidden">
                                <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                <NavigationMenuLink
                                  asChild
                                  className="z-20 relative bg-cover bg-[url('https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                                >
                                  <Link
                                    href="/"
                                    className="flex h-full w-full select-none flex-col justify-start rounded-xl bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm p-4 no-underline outline-none focus:shadow-md transition-all hover:from-black/70 hover:to-black/90 border border-white/10"
                                  >
                                    <h6 className="mb-2 mt-4 text-lg font-semibold text-white drop-shadow-lg">
                                      Event Details
                                    </h6>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )}
                            {link.menu.map((menuItem) => (
                              <ListItem
                                key={menuItem.title}
                                title={menuItem.title}
                                href={menuItem.href}
                                icon={menuItem.icon}
                              >
                                {menuItem.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        scroll={false}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-white/80 hover:text-white text-sm font-medium bg-transparent hover:bg-white/10 rounded-full px-4 transition-all duration-200 border border-transparent hover:border-white/20"
                          )}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center flex-shrink-0">
            {user ? (
              <div className="flex items-center gap-3">
                <>
                  {!pathname.includes("dashboard") ? (
                    <Button className="bg-[#EF4444] text-white font-semibold hover:bg-[#DC2626] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(239,68,68,0.4)] transition-all duration-200 rounded-full px-6 h-10">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  ) : (
                    <Button className="bg-[#EF4444] text-white font-semibold hover:bg-[#DC2626] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(239,68,68,0.4)] transition-all duration-200 rounded-full px-6 h-10">
                      <Link href="/">Home</Link>
                    </Button>
                  )}
                  <Button
                    onClick={signOut}
                    className="bg-white/5 backdrop-blur-sm border border-white/25 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-6 h-10 transition-all duration-200"
                    variant="outline"
                  >
                    Sign Out
                  </Button>
                </>
              </div>
            ) : (
              <div className="flex items-center gap-x-4">
                <Link 
                  href="/auth/" 
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-[#EF4444] text-white font-semibold hover:bg-[#DC2626] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(239,68,68,0.4)] transition-all duration-200 rounded-full px-6"
                  )}
                >
                  Sign In
                  <ZapIcon className="size-3.5 ml-1.5 text-white fill-white" />
                </Link>
              </div>
            )}
          </div>

          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = (
  { className, title, href, icon: Icon, children, ...props },
  ref
) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200 ease-out",
            "hover:bg-white/10 focus:bg-white/10 border border-transparent hover:border-white/20",
            "hover:shadow-sm hover:-translate-y-0.5",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-white">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-semibold !leading-none">{title}</h6>
          </div>
          <p
            title={children}
            className="line-clamp-1 text-sm leading-snug text-gray-400"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

export default Navbar;