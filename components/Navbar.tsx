"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import NavItem from "./NavLinkButton";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "./ui/button";

function Navbar() {
  const session = useSession();
  return (
    <NavigationMenu className="sticky min-w-full border-b-bgdetails border-b-2">
      <NavigationMenuItem className="flex flex-row items-center justify-self-end w-full m-2 mx-10">
        <NavigationMenuLink
          asChild
          className="text-2xl cursor-pointer  hover:bg-transparent focus:bg-transparent"
        >
          <Link href="/">
            <span className="text-yellowcontrast font-bold">Noah</span>
            <span className="text-orange-500 font-bold">Boxd</span>
          </Link>
        </NavigationMenuLink>
        <span className="text-primarytext text-md">- Watch, and Rate!</span>
      </NavigationMenuItem>

      <NavigationMenuList className="flex gap-5 mx-10 ">
        {!session.data?.user ? (
          <>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/register">Register</NavItem>
          </>
        ) : (
          <Button
            className="p-2 font-normal bg-transparent focus:bg-transparent text-secondtext hover:bg-subtledetail/20 hover:text-primarytext"
            onClick={() => {
              signOut();
            }}
          >
            Log Out
          </Button>
        )}

        <NavItem href="/movies">Movies</NavItem>
        <NavItem href="/profile/username">Profile</NavItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
