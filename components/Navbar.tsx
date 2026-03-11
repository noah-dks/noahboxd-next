import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import NavItem from "./NavLinkButton";

function Navbar() {
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

      <NavigationMenuList className="flex gap-5 mx-10">
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/register">Register</NavItem>
        <NavItem href="/movies">Movies</NavItem>
        <NavItem href="/profile/username">Profile</NavItem>

        {/* <Link href={`/profile/${session.data?.user.username}`}>
              {session.data?.user.username || "Profile"}
            </Link> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
