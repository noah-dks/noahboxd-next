"use client";

import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="p-1 focus:bg-transparent text-secondtext hover:bg-subtledetail/20 hover:text-primarytext"
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
